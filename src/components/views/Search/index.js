import React from 'react';
import './style.scss';

export const Search = ({history})=> {
    return(
        <>
         <div className="container">
            <div className="container-search">
                <img className="search-img" src="https://firebasestorage.googleapis.com/v0/b/mercadolibreprueba.appspot.com/o/logo-header.png?alt=media&token=05b1170a-abb5-4159-ad6b-ae3f130392c5" alt="icon" /> 
                <form className="search-form">
                <input
                    type="text"
                    placeholder="Nunca dejes de buscar"
                />
                <img onClick={()=> alert('aja')} className="search" src="https://firebasestorage.googleapis.com/v0/b/mercadolibreprueba.appspot.com/o/ic_Search.png?alt=media&token=071b3208-3a94-46f7-b193-fdd46b3b5ba4" alt="icon" /> 
            </form>
            </div>
        </div>
        </>
    )
}
