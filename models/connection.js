const { Sequelize } = require('sequelize');
const sequelize = require('../database/configDB');

const Users = require('./user');
const Product = require('./product');
const Order = require('./order');

const users = Users(sequelize, Sequelize.DataTypes);
const product = Product(sequelize, Sequelize.DataTypes);
const order = Order(sequelize, Sequelize.DataTypes);

module.exports = { users, product, order };
