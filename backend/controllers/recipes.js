const recipesRouter = require('express').Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

recipesRouter.get('/', async (req, resp) => {
  const recipes = await Recipe.find({})
  resp.json(recipes)
})

recipesRouter.post('/', async (req, resp) => {
  const { name, picture } = req.body

  let auth = req.get('authorization')
  auth = auth.replace('Bearer ', '')
  const token = jwt.verify(auth, process.env.SECRET)

  const user = await User.findById(token.id)
  if (!user) {
    resp.status(403).json({ error: 'invalid user' })
  }

  const recipe = new Recipe({
    name,
    picture,
  })

  const savedRecipe = await recipe.save()

  resp.status(201).json(savedRecipe)
})

recipesRouter.delete('/:id', async (req, resp) => {
  const recipe = await Recipe.findById(req.params.id)

  await Recipe.deleteOne(recipe)
  resp.status(204).end()
})

module.exports = recipesRouter
