const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    host: './database/dev.sqlite'
})

module.exports = sequelize;