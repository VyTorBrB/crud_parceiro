module.exports = app => {
    const getUsers = async (req, res) => {
        const data = await app.models.user.getUsers()
        data ? res.json(data) : res.status(500).send('Erro de conexao')
    }

    const insert = async (req, res) => {
        const usuario = { ...req.body }

        usuario.senha = await app.services.authServices.encryptaSenha(usuario.senha)
        const status = await app.models.user.insert(usuario)
        status ? res.send('Usuario adicionado') : res.status(500).send('Erro de conexao')
    }

    const update = async (req, res) => {
        const usuario = { ...req.body }

        if (usuario.senha) usuario.senha = await app.services.authServices.encryptaSenha(usuario.senha)
        else delete usuario.senha

        const status = await app.models.user.update(usuario)
        status ? res.send('Usuario atualizado') : res.status(500).send('Erro de conexao')
    }

    const remove = async (req, res) => {
        const status = await app.models.user.remove(req.params.id)
        status ? res.send('Usuario atualizado') : res.status(500).send('Erro de conexao')
    }

    return {
        getUsers,
        insert,
        update,
        remove
    }
}