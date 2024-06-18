import { httpClient } from '../utils/requests'

export const postRequest = {
  getAll: async () => {
    const response = await httpClient.get('/posts')

    return response
  },
  getById: async (id) => {
    const response = await httpClient.get(`/posts/${id}`)
    return response
  },
  create: async (post) => {
    const response = await httpClient.post('/posts', post)
    return response
  },
  update: async (id, post) => {
    const response = await httpClient.put(`/posts/${id}`, post)
    return response
  },
  delete: async (id) => {
    const response = await httpClient.delete(`/posts/${id}`)
    return response
  },
}
