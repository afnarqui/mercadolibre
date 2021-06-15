import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../../../graphQL/queries';
import ProductListComponent from '../ProductList';
import './style.scss';

const ProductsComponent = ({ formValues }) => {
 
    // se carga la consulta de graphql
    const  {data, loading} = useQuery(QUERY_PRODUCT, {
      variables: {
        input: {
          "producto": formValues.searchText
        } 
      }
    });
    // si aun no ha traido los datos se muestra un valor cargando
    if (loading) {
        return (
            <>
                <h1 className="loading">Cargando...</h1>
            </>
        )
    }
  
    return (
        <>
          <ol className="product">
            {
                data.obtenerProductos.map((item)=> {
                   if (item.id !== null) {
                    return < ProductListComponent key={item.id} items={item} />
                   }
                  }
                   )
            }
          </ol>
        </>
    )
}

export default React.memo(ProductsComponent);
