import { create } from 'zustand'
import { supabase } from '../utils/supabase'

const initialState = {
  user: null,
  session: null,
}

export const useAuthStore = create(set => ({
  ...initialState,
  setSession: session => set({ session }),
  setUser: user => set({ user }),

  register: async (email, password, username) => {
    const { error } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      },
    )

    if (error)
      throw error
  },

  login: async (email, password) => {
    const { user, session, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error)
      throw error
    set({ user, session })
  },

  logout: async () => {
    await supabase.auth.signOut()
    set(initialState)
  },

}))
