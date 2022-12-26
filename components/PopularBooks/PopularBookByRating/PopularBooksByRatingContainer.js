import PopularBookByRatingCard from './PopularBookByRatingCard';

const PopularBooksByRatingContainer = () => {
	return (
		<div className="mx-8 mt-8">
			<h1 className="text-6xl text-primary_color font-bold text-center my-2">
				Most Rated Books
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{[...Array(4)].map((_, index) => (
					<PopularBookByRatingCard key={index} />
				))}
			</div>
		</div>
	);
};

export default PopularBooksByRatingContainer;
