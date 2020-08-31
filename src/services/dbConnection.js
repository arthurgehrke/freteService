require('dotenv').config()

const knexfile = require('../../knexfile')
const dbConnection = require('knex')(knexfile[process.env.NODE_ENV])

module.exports = dbConnection
