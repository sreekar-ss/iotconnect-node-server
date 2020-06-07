const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    googleId : String,
    email: String,
    firstName: String,
    lastName: String,
    moderator: Boolean
}, {collection: 'users'})

module.exports = userSchema