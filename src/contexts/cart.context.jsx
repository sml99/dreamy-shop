import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
});

const addCartItem = (cartItems, productToAdd) => {
    const itemId = cartItems.findIndex((item) => item.id === productToAdd.id);
    if (itemId === -1) {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    } else cartItems[itemId].quantity += 1;

    return [...cartItems];
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(cartItems.reduce((sum, item) => sum + item.quantity, 0));
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
