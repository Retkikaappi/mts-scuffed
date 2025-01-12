import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAll } from '../requests/recipes'

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

  return (
    <RecipeContext.Provider value={{ recipes, error, isLoading }}>
      {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider
