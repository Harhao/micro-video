import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'

axios.defaults.withCredentials = true
const options: AxiosRequestConfig = {
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
}
const service: AxiosInstance = axios.create(options)
service.interceptors.request.use(
  (config) => {
    console.log(`^^^^`, config)
    return config
  },
  (error) => {}
)
service.interceptors.response.use((response) => {
  return response
})
export default service
