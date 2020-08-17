import React from 'react'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { login as userLogin } from 'api'

const SET_USER = 'SET_USER'
const SET_LOADING = 'SET_LOADING'

type AuthProviderProps = { children: React.ReactNode }
type Dispatch = (action: Action) => void
type Action =
  | { type: typeof SET_USER; username: State['username']; userId: State['userId']; isLoggedIn: State['isLoggedIn'] }
  | { type: typeof SET_LOADING; isLoading: State['isLoading'] }
type State = {
  username: string
  userId: number
  isLoggedIn: boolean
  isLoading: boolean
  logout: () => void
  login: (u: string, p: string) => Promise<void>
}

const AuthStateContext = React.createContext<State | undefined>(undefined)
AuthStateContext.displayName = 'AuthStateContext'

const AuthDispatchContext = React.createContext<Dispatch | undefined>(undefined)
AuthDispatchContext.displayName = 'AuthDispatchContext'

function authReducer(state: State, action: Action) {
  switch (action.type) {
    case SET_USER: {
      return { ...state, username: action.username, userId: action.userId, isLoggedIn: true }
    }

    case SET_LOADING: {
      return { ...state, isLoading: action.isLoading }
    }

    default: {
      throw new Error(`Unhandled action: ${action}`)
    }
  }
}

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = React.useReducer(authReducer, {
    username: undefined,
    userId: undefined,
    isLoggedIn: undefined,
    isLoading: false,
    logout,
    login
  })
  const router = useRouter()
  const [mutate] = useMutation(userLogin, {
    onSuccess: ({ username, userId }) => {
      dispatch({ type: SET_USER, username, userId, isLoggedIn: true })
      router.push('/dashboard')
    }
  })

  async function login(username: string, password: string) {
    try {
      dispatch({ type: SET_LOADING, isLoading: true })
      await mutate({ username, password })
    } catch (error) {
      console.log('error:', error)
    } finally {
      dispatch({ type: SET_LOADING, isLoading: false })
    }
  }

  async function logout() {
    console.log('logout!')
  }

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

function useAuthState() {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }
  return context
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuthState, useAuthDispatch, SET_USER }
