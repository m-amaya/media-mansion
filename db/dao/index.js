
const Sequelize = require('sequelize')
const dbconfig = require('../../config/db.config.json').development

function dao() {
    const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
        host: dbconfig.host,
        dialect: dbconfig.dialect,
        pool: {
            max:  5,
            min:  0,
            idle: 10000
        }
    })

    sequelize.authenticate()
        .then( () => {
            console.log('Successfully connected to database')
        })
        .catch( () => {
            console.log('Failed to connect to database.')
        })
}

module.exports = dao()
