export const BASE_URL = import.meta.env.VITE_BASE_URL
export const API_URL = import.meta.env.VITE_API_URL
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
export const SUPABASE_KEY = import.meta.env.VITE_ANON_KEY

export function transformToUrl(title) {
  return title.toLowerCase().replace(/ /g, '-')
}
