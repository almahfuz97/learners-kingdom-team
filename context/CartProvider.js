import { createContext, useState } from "react";


export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const cartInfo = {
        cart,
        setCart
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    )
}