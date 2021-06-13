import React from 'react';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
query obtenerUnProducto {
    obtenerUnProducto {
      id
      title
      thumbnail
      price {
        currency_id
        price
        decimals
      }
      filters {
        id 
        name
        type
        values {
          id 
          name 
          path_from_root {
            id
            name
          }
        }
      }
      available_filters {
        id 
        name
        type
        values {
          id 
          name 
          results
        }
      }
    }
  
  }
`

const HomeComponent = (props) => {
    const  {data, loading, error} = useQuery(QUERY);
    console.log(data)

    if (loading) {
        return (
            <>
                <h1>Cargando....</h1>
            </>
        )
        
    } 
    return (
        <>
            <h1>Home</h1>
        </>
    );
};

export default React.memo(HomeComponent);
