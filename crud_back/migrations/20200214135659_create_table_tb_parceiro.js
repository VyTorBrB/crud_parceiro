
exports.up = function (knex) {
    return knex.schema.createTable('tb_parceiro', t => {
        t.increments('id').primary()
        t.string('promotora', 255)
        t.string('cpf', 50)
        t.string('codigo', 30)
        t.string('token', 255)
        t.string('usuario', 150)
        t.string('senha', 255)
        t.string('regiao', 150).notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tb_parceiro')
};