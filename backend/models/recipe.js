const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
  picture: String,
  name: String,
})

recipeSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.__v
  },
})

module.exports = mongoose.model('Recipe', recipeSchema)
