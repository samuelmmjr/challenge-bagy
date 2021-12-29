const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/configDB');

class Product extends Model {}

Product.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    weight: {
        type: DataTypes.DOUBLE
    },
    price: {
        type: DataTypes.DOUBLE
    },
    qtd_stock: {
        type: DataTypes.INTEGER,
    },
    },
    {
    sequelize,
    modelName: 'product'
});

Product.associate = (models) => {
    Product.hasMany(models.Order, {
        foreignKey: 'id',
        as: 'product_id'
    });
}

module.exports = Product;
