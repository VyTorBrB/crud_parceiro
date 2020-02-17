const globals = require('../globalParameters')
const express = require('express')()
const consign = require('consign')
const app = {}

app.express = express
app.db = require('./config/knex')

consign({
    cwd: 'app'
})
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./models')
    .then('./services')
    .then('./controllers')
    .then('./config/routes.js')
    .into(app)

express.listen(globals.apiPort, () => console.log('Server running port ' + globals.apiPort))