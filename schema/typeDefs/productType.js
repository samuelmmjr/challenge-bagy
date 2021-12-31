const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } = require('graphql');

const productType = new GraphQLObjectType({
    name: 'orders',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        img: { type: GraphQLString },
        description: { type: GraphQLString },
        weight: { type: GraphQLFloat },
        price: { type: GraphQLFloat },
        qtd_stock: { type: GraphQLInt }
    })
});

module.exports = { productType }