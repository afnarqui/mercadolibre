import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
// Envuelve toda la aplicación y nos permite acceder al cliente desde cualquier parte del árbol de componentes.
import { ApolloProvider } from '@apollo/client';
// Configuración que permite conectarse a Apollo client.
import client from './server/apollo';
import { HomeComponent } from './components/views/Home';

// Estilos generales de la aplicación.
import './styles/main.scss';

ReactDOM.render(
    // Mejora la carga de datos con Suspense
    <Suspense fallback={ <div /> }>
        {/* Envuelve toda la aplicación y nos permite acceder al cliente desde cualquier parte del árbol de componentes. */}
        <ApolloProvider client={client}>
            < HomeComponent />
        </ApolloProvider>
     </Suspense>
    ,
     document.getElementById('app'))