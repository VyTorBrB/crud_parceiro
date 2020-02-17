module.exports = app => {
    app.express.post('/signIn', app.services.login.signIn)

    app.express.route('/users')
        // .all(app.config.passport.authenticate())
        .get(app.controllers.user.getUsers)
        .post(app.controllers.user.insert)
        .put(app.controllers.user.update)

    app.express.route('/users/:id')
        .all(app.config.passport.authenticate())
        .delete(app.controllers.user.remove)

    app.express.route('/parceiros')
        .all(app.config.passport.authenticate())
        .get(app.controllers.parceiros.getParceiros)
        .post(app.controllers.parceiros.insert)
        .put(app.controllers.parceiros.update)

    app.express.route('/parceiros/:id')
        .all(app.config.passport.authenticate())
        .delete(app.controllers.parceiros.remove)
}