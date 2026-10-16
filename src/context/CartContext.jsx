import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        const newCart = [...cart];
        newCart.push(item);
        setCart(newCart);
    }

    function removeFromCart(index) {
        const newCart = [];
        for (let i = 0; i < cart.length; i++) {
            if (i !== index) {
                newCart.push(cart[i]);
            }
        }
        setCart(newCart);
    }

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice = totalPrice + cart[i].price;
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}