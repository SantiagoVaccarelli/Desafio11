const knex = require("knex")({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'mibase'
    }
})

module.exports = knex