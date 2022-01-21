import graphql, {
    GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString,
} from 'graphql';
import Restaurant from '../models/Restaurant';

const RestaurantType = new GraphQLObjectType({
    name: 'Restaurant',
    fields: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
    },
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        restaurants: {
            type: new GraphQLList(RestaurantType),
            resolve() {
                return Restaurant.find({}).limit(10);
            },
        },
        restaurantsByName: {
            type: new GraphQLList(RestaurantType),
            args: {
                name: {
                    type: GraphQLString,
                },
            },
            resolve(parents, args) {
                return Restaurant.find({ name: args.name }).limit(10);
            },
        },
    },
});

const graphQLSchemaConfig: graphql.GraphQLSchemaConfig = {
    query: RootQuery,
};

module.exports = new GraphQLSchema(graphQLSchemaConfig);
