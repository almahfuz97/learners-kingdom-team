import { useContext, useState } from "react";
import AddTocardCard from "../components/addTocart/AddTocartCard";
import CartCard from "../components/CartCard/CartCard";
import { CartContext } from "../context/CartProvider";

const Cart = () => {

    const { cart } = useContext(CartContext);
    const [bookPrice, setBookPrice] = useState([]);
    console.log(bookPrice)

    return (
        <div className="max-w-screen-lg mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Your Book Cart</h2>
            <div className="lg:flex gap-6 relative items-start">
                <div className="flex-1 border border-gray-400 p-4 md:p-6">
                    {
                        cart.length ?
                            cart.map(bookId => <CartCard key={bookId} bookId={bookId} bookPrice={bookPrice} setBookPrice={setBookPrice}></CartCard>)
                            :
                            <p>Your Cart is Empty</p>
                    }
                </div>

                <aside className="w-full lg:w-[280px] border border-gray-400 p-6 sticky top-6">
                    <div>
                        <div className="text-right mb-8 text-lg max-w-xs ml-auto">
                            <p className="flex justify-between">Total amount:<span className="font-semibold">${bookPrice.reduce((a, b) => a + b, 0)}</span></p>
                        </div>
                        <div className="flex flex-col sm:flex-row lg:flex-col justify-end gap-4 lg:mt-12">
                            <button className="px-6 py-2 border border-primary_color rounded-md ">Back to Home</button>
                            <button className="px-6 py-2 border border-primary_color rounded-md">Continue to Payment</button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Cart;