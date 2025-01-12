import { createContext, useContext, useReducer } from 'react'

const reducer = (state, action) => {
  if (action.type === 'LOGIN') {
    return action.payload
  }
  if (action.type === 'LOGOUT') {
    return null
  }
  return state
}

const UserContext = createContext()

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, null)
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const [user] = useContext(UserContext)
  return user
}

export const useLogout = () => {
  const [, dispatch] = useContext(UserContext)

  return async (creds) => {
    dispatch({
      type: 'LOGOUT',
      payload: creds,
    })
    localStorage.removeItem('activeUser')
  }
}

export const useLogin = () => {
  const [, dispatch] = useContext(UserContext)

  return async (creds) => {
    dispatch({
      type: 'LOGIN',
      payload: creds,
    })
    localStorage.setItem('activeUser', JSON.stringify(creds))
  }
}

export default UserContext
