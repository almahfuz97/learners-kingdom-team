import { useRouter } from "next/router";

const PopularBookByRatingCard = ({ book }) => {
	const router = useRouter();
	return (
		<div className="p-3 cursor-pointer rounded-md shadow-md hover:scale-[1.03] duration-500">
			<div id="image">
				<img
					src={book.picture}
					className="object-cover object-center w-full rounded-md h-80"
				/>
			</div>
			<div
				id="information"
				className="flex items-center justify-between mt-4"
			>
				<div>
					<h1 className="text-xl font-bold text-primary_color">
						{book.bookName}
					</h1>
					<p className="text-lg font-medium text-secondary_color">
						{book.authorName}
					</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div
						style={{
							borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ',
						}}
						className="w-10 h-10 bg-yellow-500 flex flex-col items-center justify-center"
					>
						<p className="text-white font-medium text-lg">{book.rating}</p>
					</div>
					<div className="flex">
						{[...Array(parseInt(book.rating))].map((_, index) => (
							<p key={index} className="text-yellow-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 30 30"
									fill="currentColor"
									className="w-6 h-6"
								>
									<path
										fillRule="evenodd"
										d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
										clipRule="evenodd"
									/>
								</svg>
							</p>
						))}
					</div>
				</div>
			</div>
			<div id="description">
				<p className=" text-base mb-2 opacity-50 break-words text-clip text-left">
					{book.description.slice(0, 100)}
				</p>

				<h3 className="text-primary_color font-medium text-lg my-1">
					Price: <span className="text-blue-600">${book.price}</span>
				</h3>
			</div>
			<div
				id="actions"
				className="mt-4 flex items-center justify-between text-white"
			>
				<button onClick={() => router.push(`/book/${book._id},${book.categoryID}`)} className="bg-secondary_color px-3 py-2 rounded-md font-medium text-lg">
					Details
				</button>
				<button className="bg-primary_color px-3 py-2 rounded-md font-medium text-lg">
					Book Now
				</button>
			</div>
		</div>
	);
};

export default PopularBookByRatingCard;
