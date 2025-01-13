import { useRecipes } from '../contexts/recipeContext'
import { useUser } from '../contexts/userContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addOne, deleteOne } from '../requests/recipes'

const MenuEdit = () => {
  const { recipes, error, isLoading } = useRecipes()
  const user = useUser()

  const queryClient = useQueryClient()

  const newRecipeMutation = useMutation({
    mutationFn: addOne,
    onSuccess: (recipe) => {
      const recipes = queryClient.getQueryData(['recipes'])
      queryClient.setQueryData(['recipes'], recipes.concat(recipe))
    },
  })

  const removeRecipeMutation = useMutation({
    mutationFn: deleteOne,
    onSuccess: (id) => {
      const recipes = queryClient.getQueryData(['recipes'])
      queryClient.setQueryData(
        ['recipes'],
        recipes.filter((ele) => ele.id !== id)
      )
    },
  })
  const handleMenuAdd = (e) => {
    e.preventDefault()
    try {
      newRecipeMutation.mutate({
        name: e.target.name.value,
        picture: e.target.picture.value,
        token: user.token,
      })
      e.target.name.value = ''
      e.target.picture.value = ''
    } catch (e) {
      console.log('error', e)
    }
  }

  const handleDelete = (recipe) => {
    removeRecipeMutation.mutate(recipe)
  }

  return (
    <div className="content">
      <form onSubmit={(e) => handleMenuAdd(e)} className="loginForm">
        <input placeholder="nimi" type="text" name="name" />
        <input placeholder="url" type="text" name="picture" />
        <button type="submit">Lisää</button>
      </form>
      <div className="editContent">
        <h3>Reseptit:</h3>

        <ul>
          {error ? (
            <div>error loading recipes</div>
          ) : isLoading ? (
            <div>Recipes are loading...</div>
          ) : (
            recipes.map((ele, index) => (
              <li key={`recipeli_${index}`}>
                {ele.name} {ele.pictre}{' '}
                <button onClick={() => handleDelete(ele)}>Delete</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default MenuEdit
