module.exports = app => {
    const getParceiros = async () => {
        const res = await app.db('tb_parceiro')
            .then(data => data)
            .catch(() => false)
        return res
    }

    const update = async data => {
        const res = await app.db('tb_parceiro')
            .update(data)
            .where({ id: data.id })
            .then(data => data)
            .catch(() => false)
        return res
    }

    const insert = async data => {
        const res = await app.db('tb_parceiro')
            .insert(data)
            .then(() => true)
            .catch(() => false)
        return res
    }

    const remove = async id => {
        const res = await app.db('tb_parceiro')
            .where({ id })
            .del()
            .then(() => true)
            .catch(() => false)
        return res
    }
    return { insert, update, remove, getParceiros }
}