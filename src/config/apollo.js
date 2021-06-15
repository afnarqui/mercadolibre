import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { fetch } from 'node-fetch';

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://34.71.237.203:4000/',
        fetch
    }) 
});

export default client;
