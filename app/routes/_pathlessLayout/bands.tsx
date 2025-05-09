import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout/bands')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bands"!</div>
}
