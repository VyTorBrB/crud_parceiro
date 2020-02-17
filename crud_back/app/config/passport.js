const { authSecret } = require('../../globalParameters')
    , passport = require('passport')
    , passportJWT = require('passport-jwt')
    , { Strategy, ExtractJwt } = passportJWT

module.exports = app => {
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    const strategy = new Strategy(params, async (payload, done) => {
        await app.db('tb_usuario')
            .where({ id: payload.id })
            .first()
            .then(user => done(null, user ? { ...payload } : false))
            .catch(err => done(err, false))
    })
    passport.use(strategy)

    return { authenticate: () => passport.authenticate('jwt', { session: false }) }
}