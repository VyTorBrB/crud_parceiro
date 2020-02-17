const { authSecret } = require('../../globalParameters')
const jwt = require('jwt-simple')

module.exports = app => {
    const signIn = async (req, res) => {
        if (!req.body.login || !req.body.senha) {
            return res.status(400).send('Informe login e senha')
        }

        const user = await app.db('tb_usuario')
            .where({ login: req.body.login })
            .first()
            .then(data => data)
            .catch(() => false)

        const seIgual = app.services.authServices.comparaSenha(req.body.senha, user.senha)
        if (!seIgual) return res.status(401).send('login ou senha inválido!')

        const now = Math.floor(Date.now() / 1000)
        const payload = {
            id: user.id,
            login: user.login,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }
        const ref = {
            nome: user.nome,
            id: user.id
        }

        res.json({
            ...ref,
            token: jwt.encode(payload, authSecret)
        })
    }
    return {
        signIn
    }
}