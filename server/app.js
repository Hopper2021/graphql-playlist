const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    // this makes /graphql use the graphiql tool when you use that link
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for requests on PORT 4000')
})