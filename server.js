const express = require('express');
const Sequelize = require('./config/configDB');
const PORT = 3000
// const routes = require('./routes')

Sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.listen(PORT, () => {
    console.log(`ouvindo na porta ${PORT}`)
});