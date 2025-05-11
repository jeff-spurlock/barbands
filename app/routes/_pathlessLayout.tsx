"use client"
import { NavDrawer } from '@/components/navigation/nav-drawer'
import { UserControls } from '@/components/user-controls'
import { useSession } from '@/lib/auth-client'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/_pathlessLayout')({
  component: RootLayoutComponent,
})

function RootLayoutComponent() {
  const session = useSession()
  const [sessionData, setSessionData] = useState(session)
  useEffect(() => {
    setSessionData(session)
  }, [session])
  return(
    <div>
      <div className="flex justify-between items-center m-2">
        <NavDrawer />
        <UserControls />
      </div>
      <pre>{JSON.stringify(sessionData, null, 2)}</pre>
      <Outlet />
    </div>
  )
}

