export interface FuzzyMatch {
  score: number;
  // Indices of the matched characters in the text, for highlighting
  indices: number[];
}

const isWordStart = (text: string, index: number) => {
  if (index === 0) return true;
  const prev = text[index - 1];
  const char = text[index];
  return (
    /[\s\-_./:]/.test(prev) ||
    (prev === prev.toLowerCase() && char !== char.toLowerCase())
  );
};

// Matches the query's characters in order anywhere in the text, so "abt"
// matches "about.html". Contiguous runs and matches at word starts score
// higher; an exact substring match beats any scattered one.
export const fuzzyMatch = (query: string, text: string): FuzzyMatch | null => {
  const q = query.toLowerCase();
  const t = text.toLowerCase();

  if (!q) return { score: 0, indices: [] };

  const substringAt = t.indexOf(q);
  if (substringAt !== -1) {
    return {
      score:
        100 +
        q.length * 10 +
        (substringAt === 0 ? 50 : isWordStart(text, substringAt) ? 25 : 0),
      indices: Array.from({ length: q.length }, (_, i) => substringAt + i),
    };
  }

  const indices: number[] = [];
  let score = 0;
  let searchFrom = 0;

  for (const char of q) {
    const index = t.indexOf(char, searchFrom);
    if (index === -1) return null;

    score += 1;
    if (indices.length > 0 && index === indices[indices.length - 1] + 1) {
      score += 5;
    }
    if (isWordStart(text, index)) {
      score += 8;
    }

    indices.push(index);
    searchFrom = index + 1;
  }

  // Prefer matches that are packed together over ones spread across the text
  score -= (indices[indices.length - 1] - indices[0]) * 0.1;

  return { score, indices };
};
