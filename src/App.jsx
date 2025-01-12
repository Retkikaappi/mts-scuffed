import { NavLink, Routes, Route } from 'react-router-dom'
import Suggestion from './components/Suggestion'
import AISuggestion from './components/AISuggestion'
import Home from './components/Home'
import RecipeProvider from './contexts/recipeContext'
import Login from './components/Login'
import sign from './assets/LED-sign.png'
import { useLogout, useUser } from './contexts/userContext'

function App() {
  const user = useUser()
  const logout = useLogout()

  const handleLogout = async () => {
    await logout(user)
    console.log('logout success')
  }

  console.log('user in app', user)
  return (
    <div className="appbody">
      <div className="navbar">
        <img src={sign} width={'100px'} />
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          Koti
        </NavLink>
        <NavLink
          to={'/suggestion'}
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          Kotikokki
        </NavLink>
        <NavLink
          to={'/aisuggestion'}
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          AI
        </NavLink>
        {user ? (
          <button onClick={handleLogout}>Log out</button>
        ) : (
          <NavLink
            to={'/login'}
            className={({ isActive }) => (isActive ? 'isActive' : '')}
          >
            Login
          </NavLink>
        )}
        {user && <NavLink>Edit Menu</NavLink>}

        <img src={sign} width={'100px'} />
      </div>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/aisuggestion" element={<AISuggestion />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </RecipeProvider>
    </div>
  )
}

export default App

