import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAll } from './requests/recipes'

const RecipeContext = createContext()

export const useRecipes = () => {
  return useContext(RecipeContext)
}

const RecipeProvider = (props) => {
  const {
    data: recipes,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['recipes'],
    queryFn: getAll,
    refetchOnWindowFocus: false,
  })

  console.log('recipes', recipes)

  if (isLoading) {
    return <div>Recipes are loading</div>
  }

  if (error) {
    return <div>Failed to load recipes</div>
  }

  return (
    <RecipeContext.Provider value={recipes}>
      {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider
