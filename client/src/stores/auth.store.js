import { create } from 'zustand'

const initialState = {
  user: null,
  session: null,
}

export const useAuthStore = create(set => ({
  ...initialState,
  setSession: session => set({ session }),
  setUser: user => set({ user }),

}))
