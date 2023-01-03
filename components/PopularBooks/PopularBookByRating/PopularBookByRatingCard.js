import Link from "next/link";
import { useContext } from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";
import { CartContext } from "../../../context/CartProvider";
import useAddCart from "../../../utility/useAddCart";

const PopularBookByRatingCard = ({ book }) => {
	const { cart, setCart } = useContext(CartContext);
	const { user } = useContext(AuthContext);

	const handleAdd = (id, price) => {
		useAddCart(user, cart, setCart, id, price);
	}

	return (
		<div className="p-4 rounded-md shadow-md shadow-primary_color/40 group">
			<div id="image" className="overflow-hidden rounded-md">
				<img src={book.picture} className="object-cover object-center w-full rounded-md h-80 group-hover:scale-105 duration-300" />
			</div>
			<div id="information" className="flex items-center justify-between mt-4 gap-2">
				<div>
					<h1 className="text-xl font-bold text-primary_color">
						{book.bookName}
					</h1>
					<p className="text-lg font-medium text-secondary_color">
						{book.authorName}
					</p>
				</div>
				<div className="flex flex-col items-center justify-center text-amber-500">
					<div className="relative font-medium">
						<FaStar className="text-5xl"></FaStar>
						<p className="absolute text-sm pt-0.5 text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{(book.rating).toFixed(1)}</p>
					</div>
				</div>
			</div>
			<div id="description">
				<p className="text-base my-2 opacity-50 break-all">
					{book.description.slice(0, 100)}
				</p>

				<h3 className="text-primary_color font-medium text-lg my-1">
					Price: <span className="text-rose-600 font-bold text-lg">${book.price}</span>
				</h3>
			</div>
			<div id="actions" className="mt-4 flex text-white text-center font-medium gap-4">
				<Link href={`/book/${book._id},${book.categoryID}`} title="Details" className="flex-1 max-w-xs bg-secondary_color hover:bg-secondary_color/80 px-4 py-3 rounded-md "><button>Details</button></Link>
				<button onClick={() => handleAdd(book._id, book.price)} title="Add to cart" className="bg-primary_color hover:bg-primary_color/80 px-8 py-3 rounded-md text-2xl"><FaCartPlus></FaCartPlus></button>
			</div>
		</div>
	);
};

export default PopularBookByRatingCard;
