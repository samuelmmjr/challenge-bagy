const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const { users } = require('../models/connection');
// const User = require('../models/user');

const userType = new GraphQLObjectType({
    name: 'users',
    fields: () => ({
        id: {type: GraphQLInt },
        fullName: {type: GraphQLString },
        email: {type: GraphQLString },
        cpf: {type: GraphQLInt },
        birthDate: {type: GraphQLString },
        street: {type: GraphQLString },
        district: {type: GraphQLString },
        city: {type: GraphQLString },
        state: {type: GraphQLString },
        country: {type: GraphQLString },
        cep: {type: GraphQLInt },
        number: {type: GraphQLInt }
    })
});

const getAllUsers = {
    type: new GraphQLList(userType),
    resolve: () => {
        return users.findAll()
    }
};

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQuery",
        fields: {
            getAllUsers,
        }
    })
})
