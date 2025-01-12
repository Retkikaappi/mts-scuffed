import { NavLink, Routes, Route } from 'react-router-dom'
import Suggestion from './components/Suggestion'
import AISuggestion from './components/AISuggestion'
import Home from './components/Home'
import RecipeProvider from './recipeContext'

function App() {
  return (
    <div className="appbody">
      <div className="navbar">
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
      </div>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/aisuggestion" element={<AISuggestion />} />
        </Routes>
      </RecipeProvider>
    </div>
  )
}

export default App

