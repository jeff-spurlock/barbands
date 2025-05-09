import { createFileRoute, useRouter } from '@tanstack/react-router'
import { signUp } from '../lib/auth-client'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  
  async function testCall() {
    const response = await fetch('/api/test')
    const data = await response.json()
    console.log(data)
    return
  }
  async function handleSignUp() {
    try {
      await signUp.email({
      email: "jeffspurlock@icloud.com",
      password: "password",
      name: "Jeff Spurlock"
    })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section>
      <h1>Home</h1>
      <div>
        <h3>Test Sign Up</h3>
        <button onClick={handleSignUp}>Sign Up</button>
        
      </div>
   </section>
  )
}