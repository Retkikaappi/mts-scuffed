import { NavLink, Routes, Route } from 'react-router-dom'
import Suggestion from './components/Suggestion'
import AISuggestion from './components/AISuggestion'
import Home from './components/Home'
import RecipeProvider from './contexts/recipeContext'
import Login from './components/Login'
import sign from './assets/LED-sign.png'
import { useLogout, useSetUser, useUser } from './contexts/userContext'
import { useEffect } from 'react'
import MenuEdit from './components/MenuEdit'

function App() {
  const user = useUser()
  const setUser = useSetUser()
  const logout = useLogout()

  useEffect(() => {
    const activeUser = window.localStorage.getItem('activeUser')
    if (activeUser) {
      setUser(JSON.parse(activeUser))
    }
  }, [])

  const handleLogout = async () => {
    await logout(user)
    console.log('logout success')
  }

  console.log('user in app', user)
  return (
    <div className="appbody">
      <div className="navbar">
        <img src={sign} width={'80em'} />
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          Koti
        </NavLink>
        {user && (
          <NavLink
            to="/menuedit"
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Muuta menua
          </NavLink>
        )}
        <NavLink
          to="/suggestion"
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          Kotikokki
        </NavLink>
        <NavLink
          to="/aisuggestion"
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          AI
        </NavLink>
        {user ? (
          <button onClick={handleLogout}>Log out</button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Login
          </NavLink>
        )}

        <img src={sign} width={'80em'} />
      </div>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/aisuggestion" element={<AISuggestion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menuedit" element={<MenuEdit />} />
        </Routes>
      </RecipeProvider>
    </div>
  )
}

export default App

