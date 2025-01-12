import { useRecipes } from '../recipeContext'

const Home = () => {
  const recipes = useRecipes()

  return (
    <div className="content">
      <h2>This is home</h2>
      <h3>Reseptit:</h3>
      <ul>
        {recipes.map((ele, index) => (
          <li key={`recipeli_${index}`}>
            {ele.name} {ele.pictre}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
