import axios from 'axios'

const baseUrl = 'http://localhost:3000/login'

export const login = async (user) => {
  const resp = await axios.post(baseUrl, user)
  return resp.data
}
