const userModel = require('../models/user/user.model.server')

const createUser = (user) => {
    return userModel.create(user)
}

const findAllUsers = () => {
    return userModel.find()
}

const findUserById = (userId) => {
    return userModel.findOne(
        {
            googleId : userId
        }
    )
}

module.exports = {
    createUser,
    findAllUsers,
    findUserById
}