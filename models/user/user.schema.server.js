const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id : String,
    email: String,
    firstName: String,
    lastName: String,
    moderator: Boolean
}, {collection: 'users'})

module.exports = userSchema