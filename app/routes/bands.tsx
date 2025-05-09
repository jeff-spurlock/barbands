import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bands')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bands"!</div>
}
