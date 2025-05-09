  import * as fs from 'node:fs'
import { createFileRoute } from '@tanstack/react-router'
import { signUp } from '../lib/auth-client'


export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  async function handleClick() {
    /* const response = await fetch('/api/test')
    console.log(response)
    const data = await response.json()
    console.log(data) */
    signUp.email({
      email: "jeff@jeff.com",
      password: "password",
      name: "jeff",
    })
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}