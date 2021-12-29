const express = require('express');
const sequelize = require('./database/configDB');
const PORT = 3000;
const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');
// const routes = require('./routes')

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    User.create(req.body).then(() => {
        res.send('user is created')
    })
})

app.post('/products', (req, res) => {
    Product.create(req.body).then(() => {
        res.send('product is created')
    })
})

app.listen(PORT, () => {
    console.log(`ouvindo na porta ${PORT}`)
});