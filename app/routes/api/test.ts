import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/test')({
  GET: () => {
    return new Response(JSON.stringify({ message: 'Hello "/api/test"!' }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
})