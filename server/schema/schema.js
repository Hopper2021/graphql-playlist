const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// First you define types
// second you define relationships

// Below is defining the first type for Book for the schema
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString } 
    })
});

// Root queries are entry points to your graph to grab any different data
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            // defines what arguements are NEEDED and their types 
            // when searching for books in the schema
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                // code to get data from database/other source
            }
        }
    }
});

module.exports = new GraphQLSchema({
    // export the root query, which is an entry point to the schema
    query: RootQuery
});