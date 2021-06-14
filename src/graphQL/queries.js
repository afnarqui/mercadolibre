import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
query obtenerProductos($input: ProductoInput!) {
  obtenerProductos(input: $input) {
    id
    title
    thumbnail
    price
    prices {
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
