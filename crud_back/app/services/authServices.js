const { authSecret } = require('../../globalParameters')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const comparaSenha = (senhaREQ, senhaDB) => bcrypt.compareSync(senhaREQ, senhaDB)
    const encryptaSenha = senha => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(senha, salt)
    }
    return { comparaSenha, encryptaSenha }
}