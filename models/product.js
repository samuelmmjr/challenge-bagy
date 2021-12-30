const { product } = require("./connection");

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Product', {

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
            tableName: 'products',
            timestamps: false,
});

    Products.associate = (models) => {
        Products.hasMany(models.Order, {
            foreignKey: 'id',
            as: 'product_id'
        });
}
    return Products
};
