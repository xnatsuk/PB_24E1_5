import axios from 'axios'
import { useAuthStore } from '../stores/auth.store'
import { API_URL, SUPABASE_KEY } from './env'

class AxiosRequest {
  constructor(config) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use((config) => {
      const token = useAuthStore.getState().session?.access_token
      if (token)
        config.headers.Authorization = `Bearer ${token}`
      else
        config.headers.Authorization = `Bearer ${SUPABASE_KEY}`

      return config
    }, error => Promise.reject(error))

    this.instance.interceptors.response.use((response) => {
      return response.data
    }, error => Promise.reject(error))
  }

  request(config) {
    return this.instance.request(config)
  }

  get(url, config) {
    return this.instance.get(url, config)
  }

  post(url, data, config) {
    return this.instance.post(url, data, config)
  }

  delete(url, config) {
    return this.instance.delete(url, config)
  }
}

export const httpClient = new AxiosRequest({
  baseURL: `${API_URL}/api/v1/`,
  headers: {
    'Content-Type': 'application/json',
    'apikey': `${SUPABASE_KEY}`,
  },
})
