const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/configDB');

class Order extends Model {}

Order.init({
    id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER
    },
    product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'Products', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
    },
    dateOrder: {
    type: DataTypes.DATE,
    },
    parcelas: {
    type: DataTypes.STRING,
    },
    user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'Users', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
    },
    status: {
    type: DataTypes.STRING
    },
    createdAt: {
    allowNull: false,
    type: DataTypes.DATE
    },
    },
    {
    sequelize,
    modelName: 'order'
})

module.exports = Order;
