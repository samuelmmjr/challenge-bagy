const { type } = require('express/lib/response');
const Sequelize = require('sequelize');
const database = require('./database/db');

const User = database.define("User", {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false, type: Sequelize.STRING,
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
    },    
    endereço: {
        rua: { type: Sequelize.STRING },
        bairro: { type: Sequelize.STRING },
        cidade: { type: Sequelize.STRING },
        estado,
        país,
        cep,
        numero       
    },

},
    { tableName: 'users', timestamps: false }
);
// User.associate = ({ Sale }) => {
//     User.hasMany(Sale, { foreignKey: 'user_id' });
//     User.hasMany(Sale, { foreignKey: 'seller_id' });
// };
// return User;


module.exports = User;