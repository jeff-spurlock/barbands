import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/test')({
  GET: async ({ request }) => {
    return new Response(JSON.stringify({ message: 'Test API working' }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
})