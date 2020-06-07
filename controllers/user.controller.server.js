const userDao = require('../daos/user.dao.server')

module.exports = (app) => {
    app.post('/api/users', (req, res) => {
        const newUser = req.body
        userDao.createUser(newUser)
            .then(actualUser => res.send(actualUser))
    })
    app.get('/api/users', (req, res) =>
        userDao.findAllUsers()
            .then(allUsers => res.send(allUsers))
    )

    app.get('/api/user/:id', (req, res) =>
        userDao.findUserById(req.params['id'])
            .then(user => res.json(user))
    )
}