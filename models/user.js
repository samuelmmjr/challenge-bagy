const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/configDB');

class User extends Model {}

User.init({

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
        },

    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    cpf: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },

    birthDate: {
        type: DataTypes.STRING,
    },
    
    street: {
        type: DataTypes.STRING
    },

    district: {
        type: DataTypes.STRING
    },

    city: {
        type: DataTypes.STRING
    },

    state: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },

    cep: {
        type: DataTypes.NUMBER
    },

    number: {
        type: DataTypes.NUMBER
    }
    },
    {
    sequelize,
    timestamps: false,
    modelName: 'user'
});

User.associate = (models) => {
    User.hasMany(models.Order, {
        foreignKey: 'id',
        as: 'user_id'
    });
}

module.exports = User;
