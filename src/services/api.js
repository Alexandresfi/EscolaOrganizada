import axios from 'axios'

export const apiEscola = axios.create({
  baseURL: 'http://localhost:3001'
})

apiEscola.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('escolaorganizada:userData')
  const token = userData && JSON.parse(userData).token

  config.headers.authorization = `Bearer ${token}`
  return config
})
