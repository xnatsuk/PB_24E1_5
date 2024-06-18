import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseRegister } from '../components/base/BaseRegister'
import { useAuthStore } from '../stores/auth.store'

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')
  const { register } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(email, password, username)
      navigate('/')
    }
    catch (error) {
      console.error(error)
    }
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
