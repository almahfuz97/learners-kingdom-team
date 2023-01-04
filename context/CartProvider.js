import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";


export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const { user } = useContext(AuthContext);
    const [token, setToken] = useState('');
    const [cartLoading, setCartLoading] = useState(false);

    useEffect(() => {
        if (user?.email) {
            setToken(localStorage.getItem('lk-token'))
        }
    }, [user])

    useEffect(() => {
        if (token) {
            setCartLoading(true)
            fetch(`/api/cart/getCart?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setCart(data.result.cart)
                    setCartLoading(false)
                })
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
            fetch(`/api/cart/postCart`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(cartData),
            })
                .then(res => res.json())
                .then(data => console.log("cart data"))
                .catch(error => console.log(error))
        }
    }, [cart.length])

    const cartInfo = {
        cart,
        setCart,
        cartLoading
    }

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    )
}