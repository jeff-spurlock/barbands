import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/test')({
  GET: () => {
    return new Response(JSON.stringify({ message: 'Hello "/api/test"!' }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  POST: async ({ request }) => {
    const body = await request.json()
    console.log("request body", body)
    return new Response(JSON.stringify({ message: 'Hello "/api/test"!' }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
})

