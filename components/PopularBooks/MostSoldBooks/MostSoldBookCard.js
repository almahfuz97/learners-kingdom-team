import { useRouter } from "next/router";

const MostSoldBookCard = ({ book }) => {
	const router = useRouter();
	return (
		<div className="p-3 rounded-md shadow-md hover:scale-[1.03] duration-500">
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
						<p className="text-white font-medium text-lg">{book.totalSold}</p>
					</div>
				</div>
			</div>
			<div id="description">
				<p>
					{book.description.slice(0, 100)}
				</p>

				<h3 className="text-primary_color font-medium text-lg my-1">
					Price: <span className="text-blue-600">{book.price}</span>
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

export default MostSoldBookCard;
