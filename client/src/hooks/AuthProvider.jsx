import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { supabase } from '../utils/supabase'
import { useAuthStore } from '../stores/auth.store'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const { session, setSession, setUser } = useAuthStore()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session)
        setSession(session)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && (
        event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED'
      )
      ) {
        setSession(session)
      }

      if (event === 'SIGNED_OUT') {
        setSession(null)
      }
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [setSession, setUser])

  const value = useMemo(() => ({ session }), [session])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
