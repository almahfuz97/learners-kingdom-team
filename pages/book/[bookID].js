import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import BookReveiwsContainer from '../../components/BookReviews/BookReveiwsContainer';
import Loading from '../../components/Loader/Loading';
import ReadFewPages from '../../components/Modals/ReadFewPages/ReadFewPages';
import SimilarBooksCard from '../../components/SimilarBooksCard/SimilarBooksCard';
import { AuthContext } from '../../context/AuthProvider';
import { CartContext } from '../../context/CartProvider';
import useAddCart from '../../utility/useAddCart';
import { getCategoryWiseBooks, getSingleBook, getSpecificBookReviews } from '../api/util/getDataFromDB';


const BookDetails = ({ book, bookReviews, singleCategory }) => {

	const [bookReviewsData, setBookReviewsData] = useState([]);
	const { cart, setCart } = useContext(CartContext);
	const [modalToggle, setModalToggle] = useState(false);
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const { user, loading } = useContext(AuthContext);
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setBookReviewsData(bookReviews)
	}, [book._id])

	const handleClick = e => {
		console.log(e.target.id)
		if (e.target.id === 'modal-container') {
			setModalToggle(false)
		}
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
			userImg: `https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`,
			createdAt: Date.now(),
		}

		fetch(`/api/books/booksReview`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(reviewData)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					toast.success('Review added successfully!')
					setBookReviewsData([reviewData, ...bookReviewsData])
				}
				setIsLoading(false)
				reset();
			})
			.catch(err => {
				console.log(err.message)
				setIsLoading(false)
				reset();
				router.replace(router.asPath)
			})
	};

	const handleAdd = (id, price) => {
		useAddCart(user, cart, setCart, id, price);
	}

	return (
		<section className="max-w-screen-lg lg:mx-auto mt-10 mx-4 relative">
			<div id='modal-container' onClick={handleClick} className={`z-10 opacity-95  left-0 top-0 w-full h-full overflow-auto bg-stone-700 ${modalToggle ? 'fixed' : 'hidden'}`}>
				<ReadFewPages setModalToggle={setModalToggle} book={book} />
			</div>

			<div className="md:flex gap-6">
				<div className="w-full sm:w-2/5 mx-auto p-6 border-2 border-primary_color/40 rounded-lg mb-4 md:mb-0">
					<img
						src={book?.picture}
						alt=""
						className="mx-auto w-4/5 sm:w-full h-full object-cover"
					/>
				</div>
				<div className="p-6 border-2 border-primary_color/40 rounded-lg flex-1">
					<h1 className="text-3xl font-bold mb-2">{book.bookName}</h1>
					<div className="flex flex-wrap items-center gap-4 sm:gap-12">
						<p><span className="text-gray-600 font-medium">Author: </span>{book.authorName}</p>
						<p className="flex items-center gap-1"><span className="text-gray-600 font-medium">Rating: </span>{[...Array(parseInt(book?.rating))].map((_, i) => <FaStar key={i} className="text-amber-500"></FaStar>)}</p>
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
						<button onClick={() => handleAdd(book._id, book.price)} className="text-white bg-primary_color hover:bg-secondary_color px-8 font-semibold rounded py-3 transition">
							Add To Cart
						</button>
						<button onClick={() => setModalToggle(prev => !prev)} className="text-primary_color border-2 border-primary_color hover:bg-primary_color hover:text-white px-8 py-3 font-semibold rounded transition">
							Read few Pages
						</button>

					</div>
					{/* <p className="mb-1">
						<span className="text-gray-600 font-medium">
							Category:{' '}
						</span>
						{book?.categoryName}
					</p> */}
					{/* <p><span className="text-gray-600 font-medium">Tags: </span>{book.tags.join(', ')}</p> */}
				</div>
			</div>

			<div className="p-6 border-2 border-primary_color/40 rounded-lg mt-12">
				{
					(!loading && !user?.email) ?
						<div className='flex justify-center text-2xl font-bold text-center'>
							<p>Please <Link href={{ pathname: '/login', query: { from: router.asPath } }} className="text-primary_color hover:text-secondary_color">Login</Link> to Review the Book</p>
						</div>
						:
						<form onSubmit={handleSubmit(onSubmit)}>
							<h2 className="text-2xl font-bold mb-6">Write your review</h2>
							<textarea
								name="review"
								{...register('reviewContent', { required: true })}
								id="review"
								cols="30"
								rows="2"
								placeholder='Write review...'
								className="w-full  border-primary_color/60 focus:border-primary_color border-2 rounded-lg p-3 focus:outline-none"
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
										className="font-medium cursor-pointer text-white bg-primary_color hover:bg-secondary_color px-4 py-2 rounded-lg block mx-auto mt-4"
									/>
							}
						</form>
				}
			</div>

			<BookReveiwsContainer bookReviews={bookReviewsData}></BookReveiwsContainer>

			<div className="p-6 border-2 border-primary_color/40 rounded-lg mt-8">
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
