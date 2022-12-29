import MostSoldBooksContainer from './MostSoldBooks/MostSoldBooksContainer';
import PopularBooksByRatingContainer from './PopularBookByRating/PopularBooksByRatingContainer';

const PopularBooksContainer = ({ mostRatedBooks }) => {
	return (
		<div>
			<PopularBooksByRatingContainer mostRatedBooks={mostRatedBooks} />
			<MostSoldBooksContainer />
		</div>
	);
};

export default PopularBooksContainer;
