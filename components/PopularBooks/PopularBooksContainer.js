import MostSoldBooksContainer from './MostSoldBooks/MostSoldBooksContainer';
import PopularBooksByRatingContainer from './PopularBookByRating/PopularBooksByRatingContainer';

const PopularBooksContainer = ({ mostRatedBooks, mostSoldBooks }) => {
	return (
		<div>
			<PopularBooksByRatingContainer mostRatedBooks={mostRatedBooks} />
			<MostSoldBooksContainer mostSoldBooks={mostSoldBooks} />
		</div>
	);
};

export default PopularBooksContainer;
