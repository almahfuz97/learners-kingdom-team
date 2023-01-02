import { useRouter } from "next/router";
import { useContext, useState } from "react";
import CartCard from "../components/CartCard/CartCard";
import { AuthContext } from "../context/AuthProvider";
import { CartContext } from "../context/CartProvider";

const Cart = () => {

    const { cart, setCart } = useContext(CartContext);
    const TotalPrice = cart.reduce((a, b) => a + b.price, 0);
    const { user } = useContext(AuthContext);
    const router = useRouter();

    const handleDelete = (id) => {
        const removeBook = cart.filter(bookId => bookId.bookId !== id)
        setCart(removeBook)
    }

    const handlePaymentClick = () => {
        console.log(cart)
        const booksData = {
            cart,
            cus_email: user.email,
            cus_name: user.name,
            cus_phone: user.phone,
        }

        fetch(`${process.env.URL}/api/payment/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booksData)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.url) {
                    window.open(data.url)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="max-w-screen-lg mx-4 md:mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Your Book Cart</h2>
            <div className="lg:flex gap-6 relative items-start">
                <div className="flex-1 border border-gray-400 p-4 md:p-6 rounded-lg shadow-sm shadow-slate-400">
                    {
                        cart.length ?
                            cart.map(bookData => <CartCard key={bookData.bookId} bookId={bookData.bookId} handleDelete={handleDelete}></CartCard>)
                            :
                            <p>Your Cart is Empty</p>
                    }
                </div>

                <aside className="w-full lg:w-[280px] border mt-4 border-gray-400 p-6 sticky top-6 rounded-lg shadow-sm shadow-slate-200">
                    <div>
                        <div className="text-right mb-8 text-lg max-w-xs ml-auto">
                            <p className="flex justify-between">Total amount:<span className="font-semibold">${TotalPrice}</span></p>
                        </div>
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-end gap-4 lg:mt-12">
                            <button onClick={() => setCart([])} className="px-6 py-2 border border-primary_color rounded-md hover:text-red-600">Clear Cart</button>
                            <button onClick={handlePaymentClick} className="px-6 py-2 border border-primary_color rounded-md hover:text-primary_color">Continue to Payment</button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Cart;