import axios from 'axios'

const baseUrl = '/login'

export const login = async (user) => {
  const resp = await axios.post(baseUrl, user)
  return resp.data
}
