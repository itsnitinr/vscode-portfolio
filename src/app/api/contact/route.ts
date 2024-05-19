import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN
})

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()

  try {
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Email: { email },
        Subject: { rich_text: [{ text: { content: subject } }] },
        Message: { rich_text: [{ text: { content: message } }] }
      }
    })
    return new Response(JSON.stringify({ msg: 'Success' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ msg: 'Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
