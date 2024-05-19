declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_API_KEY: string
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_GITHUB_USERNAME: string
      NOTION_API_TOKEN: string
      NOTION_DATABASE_ID: string
    }
  }
}

export {}
