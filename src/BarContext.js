import React, {useState, createContext, useEffect} from 'react';

export const BarContext = createContext();

export const BarProvider = (props) => {

   

    return(
        <BarContext.Provider value={[filter, setFilter]}>
            {props.children}
        </BarContext.Provider>
    );
} 