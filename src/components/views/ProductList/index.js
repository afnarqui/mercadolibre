import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { SearchContext } from '../../../config/searchContext';
import './style.scss';

const ProductListComponent = ({ items }) => {
  // buscamos el valor que tiene el useContext
  const { setSearchPath } = useContext(SearchContext)
  
  const history = useHistory();
  const handleLink = () => {
    history.push(`items/${items.id}`)
    // guardo el contexto de la ruta
    setSearchPath({
      path: `items/${items.id}`
    })
  }
  
    return (
        <>
          <div className="list-container" onClick={ handleLink }>
            <img className="list-img" src={items.thumbnail}  alt={items.title}/>
            <div className="list-description"> 
              <h3>$ {items.price}</h3>   
              <p>{items.title}</p>
            </div>
          </div>
        </>
    )
}

export default React.memo(ProductListComponent);
