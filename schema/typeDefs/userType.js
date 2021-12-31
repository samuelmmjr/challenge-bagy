const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');


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

module.exports = { userType }
