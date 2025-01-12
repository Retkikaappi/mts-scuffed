const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
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
