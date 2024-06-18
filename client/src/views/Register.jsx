import { useState } from 'react'
import { redirect } from 'react-router-dom'
import { BaseRegister } from '../components/base/BaseRegister'
import { supabase } from '../utils/supabase'

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { user, session, error } = await supabase.auth.signUp({ email, password }, { data: { username } })

    if (error)
      console.error('Error signing up:', error.message)
    else
      redirect('auth/login')

    return user && session
  }

  return (
    <BaseRegister
      handleEmailChange={e => setEmail(e.target.value)}
      handlePasswordChange={e => setPassword(e.target.value)}
      handleConfirmChange={e => setConfirmPassword(e.target.value)}
      handleUsernameChange={e => setUsername(e.target.value)}
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
    />

  )
}
