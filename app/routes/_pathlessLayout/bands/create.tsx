import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout/bands/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bands/create"!</div>
}
