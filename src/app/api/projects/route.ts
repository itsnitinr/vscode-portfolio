import data from './projects.json'

export const getProjects = () => {
  return data
}

export async function GET() {
  const projects = getProjects()

  return new Response(JSON.stringify(projects), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
