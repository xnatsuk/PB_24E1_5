import React, { createContext, useEffect, useMemo } from 'react'
import { supabase } from '../utils/supabase'
import { useAuthStore } from '../stores/auth.store'

const AuthContext = createContext()
/* Subscbribe to the auth state changes in supabase
 and updates the session and user in the store */
export function AuthProvider({ children }) {
  const { session, setSession, setUser, user } = useAuthStore()

  useEffect(() => {
    supabase.auth.getUser()
      .then((response) => {
        if (response.data.user) {
          setUser(response.data.user)
        }
      })

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setSession(null)
        setUser(null)
      }
      else if (session) {
        setSession(session)
        setUser(session.user)
      }
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [setSession, setUser])

  const value = useMemo(() => ({ session, user }), [session, user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
