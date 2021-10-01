const knex = require('knex')
const file = require("./knexfile")
const conn = knex(file.development)

module.exports = conn