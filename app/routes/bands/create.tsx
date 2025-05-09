import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bands/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bands/create"!</div>
}
