import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout/account/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/account/"!</div>
}
