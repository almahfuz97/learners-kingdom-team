import Link from "next/link";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../../context/CartProvider";
import useAddCart from "../../../utility/useAddCart";

const MostSoldBookCard = ({ book }) => {
	const { cart, setCart } = useContext(CartContext);
	const handleAdd = (id, price) => {
		useAddCart(cart, setCart, id, price);
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
					<p className="font-medium text-secondary_color">
						{book.authorName}
					</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div
						style={{
							borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ',
						}}
						className="w-10 h-10 bg-amber-500 flex flex-col items-center justify-center"
					>
						<p className="text-white font-medium text-lg">{book.totalSold}</p>
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
				<Link href={`/book/${book._id},${book.categoryID}`} className="flex-1 max-w-xs bg-secondary_color hover:bg-secondary_color/80 px-4 py-3 rounded-md "><button>Details</button></Link>
				<button onClick={() => handleAdd(book._id, book.price)} className="bg-primary_color hover:bg-primary_color/80 px-8 py-3 rounded-md text-2xl"><FaCartPlus></FaCartPlus></button>
			</div>
		</div>
	);
};

export default MostSoldBookCard;
