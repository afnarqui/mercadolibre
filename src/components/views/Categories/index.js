import React from 'react';
import './style.scss';

export const Categories = ({path_from_root}) => {
    return (
        <>
            <div className="categories"> 
                { 
                    path_from_root && path_from_root.map(item => item.name).join(' > ')
                } 
            </div>
        </>
    )
}
