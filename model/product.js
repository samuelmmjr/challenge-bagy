const Sequelize = require('sequelize');
const database = require('./database/db');

const Produto = database.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    img: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    weight: {
        type: Sequelize.DOUBLE
    },
    price: {
        type: Sequelize.DOUBLE
    },
    qtd_stock: {
        type: Sequelize.INTEGER,
    }
})

module.exports = Produto;