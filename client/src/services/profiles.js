import { httpClient } from '../utils/requests'

export const profileRequest = {
  getAll: async () => {
    const response = await httpClient.get('/profiles')

    return response
  },
  getById: async (id) => {
    const response = await httpClient.get(`/profiles/${id}`)
    return response
  },
  create: async (post) => {
    const response = await httpClient.post('/profiles', post)
    return response
  },
  update: async (id, post) => {
    const response = await httpClient.put(`/profiles/${id}`, post)
    return response
  },
  delete: async (id) => {
    const response = await httpClient.delete(`/profiles/${id}`)
    return response
  },
}
