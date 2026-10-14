import assert from 'node:assert/strict';
import { test } from 'node:test';

import { fileRoutes } from '@/portfolio.config';
import type { OpenTab } from './editorTabs';

let session = 0;

const freshSession = () =>
  import(`./editorTabs.ts?session=${session++}`) as Promise<typeof import('./editorTabs')>;

const setStorage = (saved?: unknown) => {
  const values = new Map<string, string>();
  if (saved !== undefined) values.set('openTabs', JSON.stringify(saved));
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: {
      get length() { return values.size; },
      clear: () => values.clear(),
      getItem: (key: string) => values.get(key) ?? null,
      key: (index: number) => [...values.keys()][index] ?? null,
      removeItem: (key: string) => { values.delete(key); },
      setItem: (key: string, value: string) => { values.set(key, value); },
    } satisfies Storage,
  });
};

const savedState = () =>
  JSON.parse(localStorage.getItem('openTabs')!) as { version: number; tabs: OpenTab[] };

test('a new visitor gets persisted defaults before making any tab changes', async () => {
  setStorage();
  const editor = await freshSession();
  editor.restoreActiveTab('/');

  assert.equal(savedState().version, 1);
  assert.deepEqual(savedState().tabs, fileRoutes.map(route => ({
    path: route.path,
    preview: false,
  })));
});

test('legacy tabs migrate once, retaining order and extension previews', async () => {
  setStorage([
    { path: '/projects', preview: true },
    { path: '/extensions/typescript', preview: true },
    { path: '/no-longer-a-route', preview: false },
  ]);
  const editor = await freshSession();
  editor.restoreActiveTab('/projects');

  const tabs = savedState().tabs;
  assert.equal(tabs.length, fileRoutes.length + 1);
  assert.deepEqual(tabs.slice(0, 2), [
    { path: '/projects', preview: false },
    { path: '/extensions/typescript', preview: true },
  ]);

  editor.closeTab('/about');
  const saved = savedState();
  const reloaded = await freshSession();
  reloaded.restoreActiveTab('/projects');
  reloaded.openTab('/contact', { pin: true });
  assert.deepEqual(savedState(), saved);
});

test('closing a default tab survives reload and subsequent tab changes', async () => {
  setStorage();
  const editor = await freshSession();
  editor.restoreActiveTab('/');
  editor.closeTab('/about');

  const reloaded = await freshSession();
  reloaded.restoreActiveTab('/');
  // Force a write from the restored in-memory state, so a silent restoration
  // of the closed tab cannot be hidden behind unchanged browser storage.
  reloaded.openTab('/extensions/typescript');
  assert.equal(savedState().tabs.some(tab => tab.path === '/about'), false);
  assert.equal(savedState().tabs.length, fileRoutes.length);
});

test('closing all editors survives reload until explicit navigation', async () => {
  setStorage();
  const editor = await freshSession();
  editor.restoreActiveTab('/');
  editor.closeAllTabs();

  const reloaded = await freshSession();
  reloaded.restoreActiveTab('/');
  reloaded.restoreActiveTab('/');
  assert.deepEqual(savedState().tabs, []);

  reloaded.openTab('/contact');
  assert.deepEqual(savedState().tabs, [{ path: '/contact', preview: true }]);
});
