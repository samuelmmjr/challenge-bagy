const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt } = require('graphql');
const { users, products } = require('../models/connection');
const { userType } = require('./typeDefs/userType');
const { productType } = require('./typeDefs/productType');

const getAllUsers = {
    type: new GraphQLList(userType),
    args: { id: { type: GraphQLInt }},
    resolve: (parent, args) => {
        return users.findAll()
    }
};

const getUserById = {
    type: new GraphQLList(userType),
    args: { id: { type: GraphQLInt }},
    resolve: (_parent, args) => {
        return users.findByPk(args.id);
    }
};

const getAllProducts = {
    type: new GraphQLList(productType),
    args: { id: { type: GraphQLInt }},
    resolve: (parent, args) => {
        return products.findAll()
    }
};


module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQuery",
        fields: {
            getAllUsers,
            getUserById,
            getAllProducts,
        }
    })
})

