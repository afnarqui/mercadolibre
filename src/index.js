import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
// Envuelve toda la aplicación y nos permite acceder al cliente desde cualquier parte del árbol de componentes.
import { ApolloProvider } from '@apollo/client';
// Configuración que permite conectarse a Apollo client.
import client from './server/apollo';
// Estilos generales de la aplicación.
import './styles/main.scss';
// primero inicialice los objetos que son críticos para la interfaz de usuario y 
// luego silenciosamente los elementos no críticos
const Home = React.lazy(() => import('./components/views/Home'))

ReactDOM.render(
    // Mejora la carga de datos con Suspense
    <Suspense fallback={ <div /> }>
        {/* Envuelve toda la aplicación y nos permite acceder al cliente desde cualquier parte del árbol de componentes. */}
        <ApolloProvider client={client}>
            < Home />
        </ApolloProvider>
    </Suspense>
    ,
     document.getElementById('app'))