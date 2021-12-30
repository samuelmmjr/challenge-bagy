const { users } = require("./connection");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('User', {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false
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
    }, {
        tableName: 'users',
        timestamps: false,
    });

    Users.associate = function (models) {
        Users.hasMany(models.Order, {
            foreignKey: 'id',
            as: 'user_id'
        });
    }

    return Users
};
