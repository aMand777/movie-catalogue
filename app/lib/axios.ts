import axios from 'axios'

const instanceApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
})

instanceApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  return config
})

export { instanceApi }