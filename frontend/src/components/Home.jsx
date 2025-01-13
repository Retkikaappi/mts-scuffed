import { useRecipes } from '../contexts/recipeContext'

const Home = () => {
  const { recipes, error, isLoading } = useRecipes()

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
        <div className="loader"></div>
      </div>
    )
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (!recipes) {
    return <div>No recipes</div>
  }
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
