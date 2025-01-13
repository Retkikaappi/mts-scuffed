const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passHash: String,
})

userSchema.set('toJSON', {
  transform: (doc, returnedObj) => {
    ;(returnedObj.id = returnedObj._id),
      delete returnedObj._id,
      delete returnedObj.__v,
      delete returnedObj.passHash
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
