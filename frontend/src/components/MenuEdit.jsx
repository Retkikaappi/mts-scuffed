import { useRecipes } from '../contexts/recipeContext'
import { useUser } from '../contexts/userContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addOne } from '../requests/recipes'

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
  return (
    <div className="content">
      <h2>This is MenuEdit</h2>

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
                {ele.name} {ele.pictre} <button>Delete</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default MenuEdit
