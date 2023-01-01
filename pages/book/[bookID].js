import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import BookReveiwsContainer from '../../components/BookReviews/BookReveiwsContainer';
import Loading from '../../components/Loader/Loading';
import ReadFewPages from '../../components/Modals/ReadFewPages/ReadFewPages';
import SimilarBooksCard from '../../components/SimilarBooksCard/SimilarBooksCard';
import { AuthContext } from '../../context/AuthProvider';
import { getCategoryWiseBooks, getSingleBook, getSpecificBookReviews } from '../api/util/getDataFromDB';


const BookDetails = ({ book, bookReviews, singleCategory }) => {

	const [bookReviews2, setBookReviews2] = useState(bookReviews);
	const [id, setId] = useState(book._id)
	const [modalToggle, setModalToggle] = useState(false);

	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const { user, loading } = useContext(AuthContext);
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const refresh = async (id) => {
		const res = await fetch(`${process.env.URL}/api/books/booksReview?bookID=${id}`)
		const data = await res.json();
		console.log(data)
		setBookReviews2(data);
	}
	const onSubmit = data => {
		setIsLoading(true);
		const reviewData = {
			userName: user.name,
			userEmail: user.email,
			...data,
			bookID: book._id,
			categoryID: book.categoryID,
			bookName: book.bookName,
			bookAuthor: book.authorName,
			userImg: 'https://i.ibb.co/H2dyBxm/leo.jpg',
			createdAt: Date.now(),
		}

		console.log(reviewData)

		fetch(`${process.env.URL}/api/books/booksReview`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(reviewData)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.insertedId) {
					// alert('Review added successfully!')
					setId(book._id)
					refresh();
				}
				setIsLoading(false)
				reset();

				// router.replace(router.asPath)
			})
			.catch(err => {
				console.log(err.message)
				setIsLoading(false)
				reset();
				router.replace(router.asPath)
			})
	};

	return (
		<section className=" max-w-screen-lg mx-auto  mt-10 relative">
			<div className={`z-10 opacity-95  left-0 top-0 w-full h-full overflow-auto bg-stone-700 ${modalToggle ? 'fixed' : 'hidden'}`}>
				<ReadFewPages setModalToggle={setModalToggle} />
			</div>
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
					<div className=' flex gap-6 md:flex-row flex-col my-6'>
						<button className="text-white bg-primary_color hover:bg-secondary_color px-8 font-semibold rounded py-3 ">
							Add To Cart
						</button>
						<button onClick={() => setModalToggle(prev => !prev)} className="text-primary_color border-2 border-primary_color hover:bg-secondary_color px-8 py-3 font-semibold rounded ">
							Read few Pages
						</button>

					</div>
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
				{
					(!loading && !user?.email) ?
						<div className=' flex justify-center'>
							<Link href={{ pathname: '/login', query: { from: router.asPath } }} className="text-2xl w-full font-bold mb-6 text-secondary_color bg-neutral px-2 py-2 rounded-3xl text-center cursor-pointer hover:text-green-400">
								Please Login to provide a review.
							</Link>
						</div>
						:
						<form onSubmit={handleSubmit(onSubmit)}>
							<h2 className="text-2xl font-bold mb-6">Place a review</h2>
							<textarea
								name="review"
								{...register('reviewContent', { required: true })}
								id="review"
								cols="30"
								rows="2"
								className="w-full border-primary_color border-2 rounded-lg p-3 focus:outline-none"
							></textarea>
							{
								isLoading ?
									<div
										className=' flex justify-center'
									>
										<Loading></Loading>
									</div>
									: <input
										type="submit"
										value="Post Review"
										className="font-medium cursor-pointer text-white bg-primary_color px-2 py-1 rounded-lg block mx-auto mt-2"
									/>
							}
						</form>
				}
			</div>

			<BookReveiwsContainer bookReviews={bookReviews2}></BookReveiwsContainer>

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

export async function getServerSideProps({ params }) {

	console.log('here', params.bookID)
	const bookId = params.bookID.split(',')[0];
	const categoryId = params.bookID.split(',')[1];

	const bookReviews = await getSpecificBookReviews(bookId)
	const book = await getSingleBook(bookId);
	const singleCategory = await getCategoryWiseBooks(categoryId);

	return {
		props: {
			bookReviews: JSON.parse(JSON.stringify(bookReviews)),
			book: JSON.parse(JSON.stringify(book)),
			singleCategory: JSON.parse(JSON.stringify(singleCategory)),
		},

	}
}
// export async function getServerSideProps({ params }) {

// console.log('here', params.bookID)
// const bookReviews = await getBooksReviews();
// const book = await getSingleBook(params.bookID.split(',')[0]);
// console.log(params.id)
// const singleCategory = await getCategoryWiseBooks(params.bookID.split(',')[1]);


// return {
// props: {
// 	book: JSON.parse(JSON.stringify(book)),
// 	singleCategory: JSON.parse(JSON.stringify(singleCategory)),
// 	bookReviews: JSON.parse(JSON.stringify(bookReviews)),
// },
// 	props: {
// 		book: 'hello'
// 	}
// };
// }

// export const getStaticProps = async ({ params }) => {
// 	const book = await getSingleBook(params.bookID.split(',')[0]);
// 	console.log('hehe', params);
// 	const singleCategory = await getCategoryWiseBooks(
// 		params.bookID.split(',')[1]
// 	);
// 	console.log(params.bookID);

// 	return {
// 		props: {
// 			book: JSON.parse(JSON.stringify(book)),
// 			singleCategory: JSON.parse(JSON.stringify(singleCategory)),
// 		},
// 	};
// };

// export const getStaticPaths = async () => {
// 	const books = await getBooks();

// 	const paths = books.map((book) => {
// 		return {
// 			params: {
// 				bookID: `${book._id},${book.categoryID}`,
// 			},
// 		};
// 	});

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };

export default BookDetails;
