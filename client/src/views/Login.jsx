import { useState } from 'react'
import { redirect } from 'react-router-dom'
import { BaseLogin } from '../components/base/BaseLogin'
import { supabase } from '../utils/supabase'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error)
      console.error('Error signing in:', error.message)
    else
      redirect('/')

    return user && session
  }

  return (
    <BaseLogin
      handleEmailChange={e => setEmail(e.target.value)}
      handlePasswordChange={e => setPassword(e.target.value)}
      handleSubmit={handleSubmit}
      email={email}
      password={password}
    />
  )
}
