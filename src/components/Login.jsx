import { useNavigate } from 'react-router-dom'
import { useLogin, useUser } from '../contexts/userContext'

const Login = () => {
  const user = useUser()
  const login = useLogin()

  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login({
        username: e.target.username.value,
        password: e.target.password.value,
      })
      console.log('success')
      e.target.username.value = ''
      e.target.password.value = ''
      nav('/')
    } catch (error) {
      console.log('error caught: ', error)
    }
  }
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} className="loginForm">
        <input type="text" name="username" placeholder="username" required />
        <input type="text" name="password" placeholder="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
