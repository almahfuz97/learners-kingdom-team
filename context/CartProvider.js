import { createContext } from "react";


export const CartContext = createContext();

export default function CartProvider({ children }) {


    const cartInfo = {
        cart: [34, 34, 34, 34, 34, 34, 34]
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    )
}