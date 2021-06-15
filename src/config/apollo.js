import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { fetch } from 'node-fetch';

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://e9c65a3060c5.ngrok.io',
        fetch
    }) 
});

export default client;
