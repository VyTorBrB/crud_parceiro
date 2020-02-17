const cors = require('cors')
const bodyParser = require('body-parser')
module.exports = app => {
    app.express.use(cors())
    app.express.use(bodyParser.json())
}