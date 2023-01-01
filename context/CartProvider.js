import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";


export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const { user } = useContext(AuthContext);
    const [token, setToken] = useState('');

    useEffect(() => {
        if (user?.email) {
            setToken(localStorage.getItem('lk-token'))
        }
    }, [user])

    useEffect(() => {
        if (token) {
            fetch(`${process.env.URL}/api/cart/getCart?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => setCart(data.result.cart))
                .catch(error => console.log(error))
        }
    }, [token])

    useEffect(() => {
        if (user?.email) {
            const userEmail = user.email;
            const cartData = {
                userEmail,
                cart
            }
            console.log('update cart')
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