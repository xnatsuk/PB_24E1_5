import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseLogin } from '../components/base/BaseLogin'
import { useAuthStore } from '../stores/auth.store'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate('/')
    }
    catch (error) {
      console.error('Error logging in:', error)
    }
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
