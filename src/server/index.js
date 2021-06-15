const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

// Instancia del servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        const author = {
            name: 'Andrés',
            lastName: 'Naranjo'
        }
        return author;
    }
});

// ejecutamos el servidor
server.listen().then(( {url} ) => {
    console.log(`Servidro ejecutado en: ${url}` );
})
