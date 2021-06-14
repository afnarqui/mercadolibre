import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../server/searchContext';

const Details = () => {
   const { searchPath } = useContext(SearchContext)
   const [ display, setDisplay ] = useState(true);

   useEffect(() => {
    if(searchPath.path.includes('items?search=')) {
        setDisplay(false);
    }
   }, [searchPath])

    return (
        <>
            {
                display && <h1>Details</h1>
            }
        </>
    )
}

export default Details;