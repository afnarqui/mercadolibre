import React, { useState } from 'react';
import { RouterComponent } from '../../../routers'
import { SearchContext } from '../../../config/searchContext';

export const HomeComponent = (props) => {

  const [ searchPath, setSearchPath ] = useState({ path: ''})

  return (
    // implemento un useContext el cual va a permitir 
    // compartir información en todos los componentes
       <SearchContext.Provider value={{
          searchPath,
          setSearchPath
       }}>
          <RouterComponent />
       </SearchContext.Provider>
    );
};
