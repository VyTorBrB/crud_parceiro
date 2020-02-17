
exports.up = function (knex) {
    return knex.schema.createTable('tb_usuario', t => {
        t.increments('id').primary()
        t.string('nome')
        t.string('login')
        t.string('senha')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tb_usuario')
};