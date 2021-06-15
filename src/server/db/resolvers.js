const { searchProducts, searchDetailsById } = require('../hoc');

// Creando Resolvers

const resolvers =  {
    Query: {
        obtenerProductos: async (_, {input}, ctx) =>
        {   
            console.log(ctx);
            return await searchProducts(input.producto)
        },
        obtenerDetalleId: async(_, { input }, ctx) => {
            return await searchDetailsById(input.id)
        }
    }
}

module.exports = resolvers;
