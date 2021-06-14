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

export const QUERY_DETAILS = gql`
  query obtenerDetalleId($input: DetailsInput!) {
    obtenerDetalleId(input: $input) {
      id
      title
      thumbnail
      condition
      sold_quantity
      price
      plain_text
      path_from_root {
        id 
        name
      }
    }
  }
`
