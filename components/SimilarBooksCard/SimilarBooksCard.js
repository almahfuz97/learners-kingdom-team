import Link from "next/link";
import { useContext } from "react";
import { FaCartPlus, FaEye, FaStar } from "react-icons/fa";
import { CartContext } from "../../context/CartProvider";
import useAddCart from "../../utility/useAddCart";

const SimilarBooksCard = ({ book }) => {

    const { cart, setCart } = useContext(CartContext);
    const handleAdd = (id, price) => {
        useAddCart(cart, setCart, id, price);
    }

    return (
        <div className="cursor-default">
            <div className="flex flex-col gap-1 rounded-md shadow-lg group">
                <div className="overflow-hidden relative">
                    <img src={book.picture} alt="" className="w-full h-72 object-cover rounded-t duration-300 group-hover:scale-110" />
                    <div className="absolute -bottom-10 group-hover:bottom-0 duration-300 bg-white w-full flex gap-0.5 text-2xl text-white">
                        <Link href={`/book/${book._id},${book.categoryID}`} title="Details" className="p-2 w-full flex justify-center items-center bg-primary_color"><button className="flex justify-center items-center"><FaEye></FaEye></button></Link>
                        <button onClick={() => handleAdd(book._id, book.price)} title="Add to cart" className="p-2 w-full flex justify-center items-center bg-primary_color"><FaCartPlus></FaCartPlus></button>
                    </div>
                </div>
                <div className="flex flex-col gap-1 p-3 items-center text-center">
                    <p className="text-xs flex gap-0.5 items-center text-gray-600">{[...Array(parseInt(book.rating))].map((_, i, arr) => <FaStar key={i} className="text-amber-500"></FaStar>)} <span className="ml-1">({book.totalSold})</span></p>
                    <Link href={`/book/${book._id},${book.categoryID}`}><h2 className="text-lg font-bold mt-1 text-primary_color">{book.bookName}</h2></Link>
                    <p className="text-sm font-medium text-gray-600">{book.authorName}</p>
                    <p className="text-xl font-medium text-rose-500">${book.price}</p>
                </div>
            </div>
        </div>
    );
};

export default SimilarBooksCard;