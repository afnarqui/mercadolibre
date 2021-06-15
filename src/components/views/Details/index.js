import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DETAILS } from '../../../graphQL/queries';
import { SearchContext } from '../../../config/searchContext';
import { useLocation } from 'react-router-dom';
import './style.scss';
import { Categories } from '../Categories';

const Details = ({id}) => {
   const { searchPath } = useContext(SearchContext)
   const [ display, setDisplay ] = useState(true);
   const location = useLocation();

   const q  = 
       location.pathname.includes('/items/') ?  
       location.pathname.substr(7,location.pathname.length) :
       '' 
 
    // se carga la consulta de graphql
    const  {data, loading} = useQuery(QUERY_DETAILS, {
    variables: {
        input: {
        "id": q
        } 
    }
    });

   useEffect(() => {
    if(searchPath.path.includes('items?search=')) {
        setDisplay(false);
    }
   }, [searchPath])

   if (loading) {
    return (
        <>
            <div className="loading">
            </div>
        </>
    )
    }
 
    return (
        <>
            {
                display && (
                    <Categories path_from_root={data.obtenerDetalleId[0]['path_from_root']} />
                )
            }
            {
                display && (
                <div className="details">
                    <div className="container">
                        <div className="details-item">
                            <img className="details-img" src={data.obtenerDetalleId[0]['thumbnail']}  alt={data.obtenerDetalleId[0]['title']}/>
                            <div className="details-params">
                                <span className="details-condition">{ data.obtenerDetalleId[0]?.condition === 'new' ? 'Nuevo': data.obtenerDetalleId[0]?.condition } - {data.obtenerDetalleId[0]?.sold_quantity } Vendidos </span>
                                <p className="details-title">{data.obtenerDetalleId[0].title}</p>
                                <h2>$ {data.obtenerDetalleId[0].price}</h2>   
                                <button className="details-button">Comprar</button>
                            </div>
                        </div>
                        <div className="details-description"> 
                            <h2 className="details-description-title">Descrición del producto</h2>
                            <p className="description">{data.obtenerDetalleId[0].plain_text}</p>
                        </div>
                    </div>
                </div>
                )
            }
        </>
    )
}

export default Details;