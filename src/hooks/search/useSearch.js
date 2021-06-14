import { useState } from 'react';

export const useSearch = ( stateInitial = {} ) => {

    const [ value, setValue ] = useState( stateInitial );
    // permite resetear los valores a un objeto vacio
    const reset = () => {
        setValue( stateInitial);
    }
    // permite agregar los valores entrantes a el state
    const handleChange = ({ target }) => {

        setValue({
            ...value,
            [target.name]: target.value
        });
    }
    // devuelve el valor que tiene, la función que cambia el valor y
    // la función que renicia el valor a un objeto vacio
    return [ value, handleChange, reset ];

}
