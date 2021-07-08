import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:7000',
  withCredentials: false
})

const token = localStorage.getItem('token')
if (token) {
  instance.defaults.headers.common.Authorization = 'Token ' + localStorage.getItem('token')
}
export default instance
