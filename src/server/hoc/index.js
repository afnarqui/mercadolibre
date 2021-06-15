const fetch = require("node-fetch");

const searchProducts = async ( product ) => {
    // consultamos la api según el filtro buscado
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${product}&limit=4`;
    
    const resp = await fetch(url);
    const { results, filters, available_filters } = await resp.json();
    
    return [...results, 
            results['filters'] = {filters}, 
            results['available_filters'] = {available_filters} ];
}

const searchDetailsById = async ( Id = '') => {
    
    if ( !Id ) return {};
   // consultamos la api según el detalle seleccionado
    const urlItem = `https://api.mercadolibre.com/items/${Id}`;

    const resp = await fetch(urlItem);
    const { thumbnail, id, title, price, currency_id, 
             condition, shipping, sold_quantity, category_id,
             prices
    } = await resp.json();

    if ( !id ) return {};

    const { plain_text } = await searchDescription(Id);

    const { path_from_root } = await searchCategories(category_id);

    const result =  {
        thumbnail, id, title, currency_id, 
        condition, shipping, sold_quantity, category_id,
        price,
        plain_text,path_from_root
    }
    return [result];

}

const searchDescription = async ( itemId ) => {
    // consultamos la api según la descripción
    const urlDescription = `https://api.mercadolibre.com/items/${itemId}/description`;
    const resp = await fetch(urlDescription);
    const data = await resp.json();
    return data;
}

const searchCategories = async ( Id ) => {
    // consultamos la api según las categorías
    const urlCategories = `https://api.mercadolibre.com/categories/${Id}`;
    const resp = await fetch(urlCategories);
    const data = await resp.json();
    return data;
}

module.exports = {
    searchProducts,
    searchDetailsById
};
