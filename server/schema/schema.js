const graphql = require('graphql');
// lodash is used in the rootquery to help find books
const _ = require('lodash');

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
                // This tells graphql how to data the data when someone makes a request
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    // export the root query, which is an entry point to the schema
    query: RootQuery
});