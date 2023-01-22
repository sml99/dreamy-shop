import { createContext, useEffect, useState } from 'react';
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext(SHOP_DATA);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(SHOP_DATA);
    const value = { products, setProducts };

    useEffect(() => {
        //CALLBACK TO FIRESTORE DB
        //UPDATE SHOP DATA
        //UNSUBSCRIBE
    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
