import axios from 'axios'
const baseUrl = 'http://localhost:3000/recipes'

export const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

export const addOne = async ({ name, picture, token }) => {
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const resp = await axios.post(baseUrl, { name, picture }, headers)
  return resp.data
}
