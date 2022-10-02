import axios from 'axios'

// conexão com a API da unsplash
const api = axios.create({
  baseURL: 'https://api.unsplash.com',
})

export default api;