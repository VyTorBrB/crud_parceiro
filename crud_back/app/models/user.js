module.exports = app => {
    const getUsers = async () => {
        const res = await app.db('tb_usuario')
            .then(data => data)
            .catch(() => false)
        return res
    }

    const insert = async data => {
        const res = await app.db('tb_usuario')
            .insert(data)
            .then(() => true)
            .catch(() => false)
        return res
    }

    const update = async data => {
        const res = await app.db('tb_usuario')
            .update(data)
            .where({ id: data.id })
            .then(data => data)
            .catch(() => false)
        return res
    }

    const remove = async id => {
        const res = await app.db('tb_usuario')
            .where({ id })
            .del()
            .then(data => data)
            .catch(() => false)
        return res
    }

    return { getUsers, insert, update, remove }
}