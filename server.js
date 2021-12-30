const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const sequelize = require('./database/configDB');
const PORT = 3000;
const schema = require('./schema/schema');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(express.json());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`ouvindo na porta ${PORT}`)
});