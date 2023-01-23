import { createContext, useEffect, useState } from 'react';

const DATA = [
    {
        id: 3,
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        name: 'Brown Cowboy',
        price: 35,
        quantity: 4,
    },
    { id: 2, imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png', name: 'Blue Beanie', price: 18, quantity: 2 },
];

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

const removeItem = (cartItems, productToRemove) => {
    const itemId = cartItems.findIndex((item) => item.id === productToRemove.id);
    if (cartItems?.length === 1 && cartItems[0].id === productToRemove.id) return [];
    if (itemId !== -1) {
        return [...cartItems].splice(itemId - 1, 1);
    }
};

const addQuantityAmount = (cartItems, product, amount = 1) => {
    return cartItems.map((item) =>
        item.id === product.id
            ? { ...product, quantity: product.quantity + amount > 0 ? product.quantity + amount : 1 }
            : item
    );
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(DATA); //[]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(cartItems.reduce((sum, item) => sum + item.quantity, 0));
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeItem(cartItems, productToRemove));
    };

    const addQuantity = (product, amount = 1) => {
        setCartItems(addQuantityAmount(cartItems, product, amount));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        addCartItem,
        removeItemFromCart,
        addQuantity,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
