export type UserCredentials = {
  username: string
  password: string
}

export type User = {
  id: number
  username: string
  password: string
}

export type AccessToken = {
  sub: string
  name: string
  exp: string
}

export type LoginResponse = {
  userId: number
  isLoggedIn: boolean
  username: string
}
