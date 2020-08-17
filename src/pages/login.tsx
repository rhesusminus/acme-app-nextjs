import React from 'react'
import { useAuthState } from 'components'
import { Button, Input } from 'components'

export default function Login() {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const { login, isLoading } = useAuthState()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    login(username, password)
  }

  return (
    <div className="bg-red-800 min-h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white rounded p-8">
        <Input
          id="username-input"
          label="Username"
          value={username}
          onChange={setUsername}
          placeholder="Username"
          type="text"
          required
        />
        <Input
          id="password-input"
          className="mt-6"
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Password"
          type="password"
          required
        />
        <Button className="relative w-24 mt-6 h-12" type="submit" disabled={isLoading} loading={isLoading}>
          Sign in
        </Button>
      </form>
    </div>
  )
}
