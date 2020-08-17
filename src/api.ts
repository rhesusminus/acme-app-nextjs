import axios from 'axios'
import { UserCredentials, LoginResponse } from 'types'

const urls = {
  development: 'http://localhost:3000/api',
  staging: '',
  production: ''
}

const instance = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export async function login(credentials: UserCredentials) {
  const { data } = await instance.post<LoginResponse>('login', { ...credentials })

  return data
}
