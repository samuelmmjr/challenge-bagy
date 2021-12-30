const { Sequelize } = require('sequelize');
const sequelize = require('../database/configDB');
const DataTypes = Sequelize.DataTypes

const Users = require('./user');
const Product = require('./product');
const Order = require('./order');

const users = Users(sequelize, DataTypes);
const product = Product(sequelize, DataTypes);
const order = Order(sequelize, DataTypes);

module.exports = { users, product, order };
