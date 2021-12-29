const db = require('../database/configDB');

const {
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList 
} = require('graphql');

const Users = new GraphQLObjectType({
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
    type: new GraphQLList(Users),
    resolve: () => db.users.all()
}
module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQuery",
        fields: {
            getAllUsers
        }
        
    })
});