import SimilarBooksCard from '../../components/SimilarBooksCard/SimilarBooksCard';
import {
	getBooks,
	getCategoryWiseBooks,
	getSingleBook,
} from '../api/util/getDataFromDB';

const BookDetails = ({ book, singleCategory }) => {
	console.log(book);

	const handleReview = (e) => {
		e.preventDefault();
		const form = e.target;
		const review = form.review.value;
		console.log(review);
	};

	return (
		<section className="container max-w-screen-lg mx-auto mt-10">
			<div className="md:flex gap-6">
				<div className="max-w-xs mx-auto sm:max-w-none p-6 border border-primary_color rounded-lg mb-4 md:mb-0">
					<img
						src={book?.picture}
						alt=""
						className="mx-auto w-full sm:max-w-xs md:max-w-md"
					/>
				</div>
				<div className="p-6 border border-primary_color rounded-lg flex-1">
					<h1 className="text-3xl font-bold mb-2">{book.bookName}</h1>
					<div className="flex gap-12">
						<p>
							<span className="text-gray-600 font-medium">
								Author:{' '}
							</span>
							{book.authorName}
						</p>
						<p className="text-sm">
							Rating:{' '}
							{[...Array(parseInt(book?.rating))].map(
								(_, i) => '⭐ '
							)}
						</p>
					</div>
					<h4 className="text-xl font-medium my-4">
						<span className="text-gray-600">Price: </span>
						<span className="text-rose-600">${book.price}</span>
					</h4>
					<p className="text-justify">
						<span className="text-gray-600 font-medium">
							Description:
						</span>{' '}
						{book.description}
					</p>
					<button className="text-white bg-primary_color hover:bg-secondary_color px-8 py-3 font-semibold rounded my-6">
						Add To Cart
					</button>
					<p className="mb-1">
						<span className="text-gray-600 font-medium">
							Category:{' '}
						</span>
						{book?.categoryName}
					</p>
					{/* <p><span className="text-gray-600 font-medium">Tags: </span>{book.tags.join(', ')}</p> */}
				</div>
			</div>
			<div className="p-6 border border-primary_color rounded-lg mt-8">
				<p className="text-2xl font-bold mb-6 text-secondary_color bg-neutral px-2 py-1 rounded-3xl text-center">
					Please Login to provide a review.
				</p>
				<form onSubmit={handleReview}>
					<h2 className="text-2xl font-bold mb-6">Place a review</h2>
					<textarea
						name="review"
						id="review"
						cols="30"
						rows="2"
						className="w-full border-primary_color border-2 rounded-lg p-3 focus:outline-none"
					></textarea>
					<input
						type="submit"
						value="Post Review"
						className="font-medium text-white bg-primary_color px-2 py-1 rounded-lg block mx-auto mt-2"
					/>
				</form>
			</div>
			<div className="p-6 border border-primary_color rounded-lg mt-8">
				<h2 className="text-2xl font-bold mb-6">Similar books</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					{singleCategory
						.filter((similar) => similar._id !== book._id)
						.map((simBook) => (
							<SimilarBooksCard
								key={simBook._id}
								book={simBook}
							></SimilarBooksCard>
						))}
				</div>
			</div>
		</section>
	);
};

export const getStaticProps = async ({ params }) => {
	const book = await getSingleBook(params.bookID.split(',')[0]);
	console.log('hehe', params);
	const singleCategory = await getCategoryWiseBooks(
		params.bookID.split(',')[1]
	);
	console.log(params.bookID);

	return {
		props: {
			book: JSON.parse(JSON.stringify(book)),
			singleCategory: JSON.parse(JSON.stringify(singleCategory)),
		},
	};
};

export const getStaticPaths = async () => {
	const books = await getBooks();

	const paths = books.map((book) => {
		return {
			params: {
				bookID: `${book._id},${book.categoryID}`,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export default BookDetails;
