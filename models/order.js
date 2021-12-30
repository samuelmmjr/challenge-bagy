const { order } = require("./connection");

module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Order', {

    id: {
    allowNull: false,
    autoIncrement: true,
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

    installments: {
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
    modelName: 'order'
})
    return Orders
}
