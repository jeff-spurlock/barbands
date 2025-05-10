import { NavDrawer } from '@/components/navigation/nav-drawer'
import { UserControls } from '@/components/user-controls'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout')({
  component: RootLayoutComponent,
})

function RootLayoutComponent() {
  return(
    <div>
      <div className="flex justify-between items-center m-2">
        <NavDrawer />
        <UserControls />
      </div>
      <Outlet />
    </div>
  )
}

