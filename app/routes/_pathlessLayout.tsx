import { NavDrawer } from '@/components/navigation/nav-drawer'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout')({
  component: RootLayoutComponent,
})

function RootLayoutComponent() {
  return(
    <div>
      <NavDrawer />
      <Outlet />
    </div>
  )
}

