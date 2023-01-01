import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";


export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (cart.length) {
            const userEmail = user.email;
            const cartData = {
                userEmail,
                cart
            }

            fetch(`${process.env.URL}/api/cart/postCart`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(cartData),
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }
    }, [cart.length])

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