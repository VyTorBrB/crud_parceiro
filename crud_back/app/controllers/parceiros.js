module.exports = app => {
    const getParceiros = async (req, res) => {
        const data = await app.models.parceiros.getParceiros()
        data ? res.json(data) : res.status(500).send('Erro de conexao')
    }

    const update = async (req, res) => {
        const status = await app.models.parceiros.update(req.body)
        status ? res.send('Parceiro atualizado') : res.status(500).send('Erro de conexao')
    }

    const insert = async (req, res) => {
        const status = await app.models.parceiros.insert(req.body)
        status ? res.send('Parceiro inserido') : res.status(500).send('Erro de conexao')
    }

    const remove = async (req, res) => {
        const status = await app.models.parceiros.remove(req.params.id)
        status ? res.send('Parceiro removido') : res.status(500).send('Erro de conexao')
    }
    return { remove, getParceiros, update, insert }
}