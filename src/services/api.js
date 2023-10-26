import axios from 'axios'

export const apiEscola = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`
})

apiEscola.interceptors.request.use(config => {
  const userData = localStorage.getItem('escolaorganizada:userData')
  const token = userData && JSON.parse(userData).token

  config.headers.authorization = `Bearer ${token}`
  return config
})
