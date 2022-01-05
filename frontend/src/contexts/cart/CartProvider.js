import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (probs) => {
    const [cartItems, setCartItems] = useState({});

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {probs.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }