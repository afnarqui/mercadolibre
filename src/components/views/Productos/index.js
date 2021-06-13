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

const ProductosComponent = () => {
    const  {data, loading, error} = useQuery(QUERY);
    console.log(data)
    console.log(loading)
    console.log(error)
    if (loading) {
        return (
            <>
                <h1>Cargando...</h1>
            </>
        )
    }
    return (
        <>
            <h1>Productos</h1>
        </>
    )
}

// export const Productos = ProductosComponent;
export default React.memo(ProductosComponent);
