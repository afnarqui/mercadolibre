import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../../../hooks/search/useSearch';
import queryString from 'query-string';
import { SearchContext } from '../../../server/searchContext';

import Products from '../Products';

// Estilos de Search en la aplicación.
import './style.scss';

const Search = ({history})=> {
    // hooks que permite sacar el valor del query string
    const location = useLocation();

    // buscamos el valor que tiene el useContext
    const { searchPath ,setSearchPath } = useContext(SearchContext)

    const [ display, setDisplay ] = useState(true);
    
    const { q = '' } = queryString.parse( location.search );
    // hooks personalizado para manipular el dato del buscador
    const [ formValues, handleChange ] = useSearch({
        searchText: q
    })

    const { searchText } = formValues
    const [ loadings, setLoadings ] = useState(false);

    // se ejecuta al dar enter en el input y/o dar clic en el icono buscar
    const handleSearch = (e) => {
        e.preventDefault();
        if ( searchText.trim().length > 2 ) {
            history.push(`/items?search=${searchText}`);
        }
        setLoadings(true);
        setDisplay(true);
        setSearchPath(
            {
                path: `items?search=${ searchText }`
            }
        )
    }

    useEffect(() => {
        if(location.pathname.includes('/items/items/')) {
            history.push(`${searchPath.path}`)
        } else {
            if(location.pathname.includes('/items/')) {
                setDisplay(false);
            }
        }
    }, [location])

    return(
        <>
         <div className="container">
            <div className="container-search">
                <img className="search-img" src="https://firebasestorage.googleapis.com/v0/b/mercadolibreprueba.appspot.com/o/logo-header.png?alt=media&token=05b1170a-abb5-4159-ad6b-ae3f130392c5" alt="icon" /> 
                <form onSubmit={ handleSearch } className="search-form">
                <input
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    name="searchText"
                    autoComplete="off"
                    value= { searchText }
                    onChange={ handleChange }
                />
                <img onClick={handleSearch} className="search" src="https://firebasestorage.googleapis.com/v0/b/mercadolibreprueba.appspot.com/o/ic_Search.png?alt=media&token=071b3208-3a94-46f7-b193-fdd46b3b5ba4" alt="icon" /> 
            </form>
            </div>
        </div>
           {
               loadings && display && <Products formValues={formValues} />
           }
        </>
    )
}

export default React.memo(Search);