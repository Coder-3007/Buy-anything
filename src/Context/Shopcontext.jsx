import React, { createContext } from 'react';
import all_product from '../Components/assets/all_product'



export const Shopcontext= createContext(null);


const  ShopcontextProvider = (props ) => {
 
    // a variable  with a name with data and functions 
    // we can access it 
    const contextValue = {all_product};
        
    // we have everything in props now the value etc
    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider;
