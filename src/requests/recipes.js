import axios from 'axios'
const baseUrl = 'http://localhost:3000/recipes'

export const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}
