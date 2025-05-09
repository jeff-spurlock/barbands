import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/test')({
  component: TestPage,
})

export const APIRoute = {
  GET: () => {
    return json({ message: 'Test API working' })
  }
}

function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  )
} 