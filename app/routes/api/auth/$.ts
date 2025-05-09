import { auth } from '@/utils/auth'
import { createAPIFileRoute } from '@tanstack/react-start/api'
 
export const APIRoute = createAPIFileRoute('/api/auth/$')({
  GET: async ({ request }) => {
    console.log('GET request on auth api', request)
    return auth.handler(request)
  },
  POST: async ({ request }) => {
    console.log('POST request on auth api', request)
    return auth.handler(request)
  },
});
