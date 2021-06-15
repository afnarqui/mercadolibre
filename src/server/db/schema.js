const {  gql } = require('apollo-server');

// Creando Schema

const typeDefs = gql`

    type Producto {
        id: ID
        thumbnail: String
        title: String
        price: String
        prices: Price
        filters: [Filters]
        available_filters: [Available_filters]
    }

    type Price {
        currency_id: String
        price: String
        decimals: String
    }

    type Filters {
        id: String
        name: String
        type: String
        values: [ValuesFilters]
    }

    type ValuesFilters {
        id: String
        name: String
        path_from_root: [Path_from_root]
    }

    type Path_from_root {
        id: String
        name: String
    }

    type Available_filters {
        id: String
        name: String
        type: String
        values: [ValuesAvailable_filters]
    }

    type ValuesAvailable_filters {
        id: String
        name: String
        results: Int
    }

    input ProductoInput {
        producto: String
    }

    type Details {
        id: ID
        thumbnail: String, 
        title: String, 
        currency_id: String, 
        condition: String
        shipping: String
        sold_quantity: String
        category_id: String
        plain_text: String
        price: String
        path_from_root: [Path_from_root_details]
    }

    type Path_from_root_details {
        id: String
        name: String
    }

    input DetailsInput {
        id: String
    }    

    type Query {
        obtenerProductos(input: ProductoInput!): [Producto]
        obtenerDetalleId(input: DetailsInput!): [Details]
    }
`

module.exports = typeDefs;