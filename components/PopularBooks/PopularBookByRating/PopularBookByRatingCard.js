import Link from "next/link";
import { FaStar } from "react-icons/fa";

const PopularBookByRatingCard = ({ book }) => {

	return (
		<div className="p-4 rounded-md shadow-md hover:scale-[1.03] duration-500">
			<div id="image">
				<img
					src={book.picture}
					className="object-cover object-center w-full rounded-md h-80"
				/>
			</div>
			<div
				id="information"
				className="flex items-center justify-between mt-4 gap-2"
			>
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
				<Link href={`/book/${book._id},${book.categoryID}`} className="flex-1 bg-secondary_color px-3 py-2 rounded-md "><button>Details</button></Link>
				<button className="flex-1 bg-primary_color px-3 py-2 rounded-md">Book Now</button>
			</div>
		</div>
	);
};

export default PopularBookByRatingCard;
