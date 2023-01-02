import PopularBookByRatingCard from './PopularBookByRatingCard';

const PopularBooksByRatingContainer = ({ mostRatedBooks }) => {
	return (
		<div className="mx-4 my-20">
			<h1 className="text-3xl mb-8 text-primary_color font-bold text-center my-2">
				Top Rated Books
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{mostRatedBooks?.map((book, index) => (
					<PopularBookByRatingCard book={book} key={index} />
				))}
			</div>
		</div>
	);
};

export default PopularBooksByRatingContainer;
