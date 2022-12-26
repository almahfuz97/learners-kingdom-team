import MostSoldBooksContainer from './MostSoldBooks/MostSoldBooksContainer';
import PopularBooksByRatingContainer from './PopularBookByRating/PopularBooksByRatingContainer';

const PopularBooksContainer = () => {
	return (
		<div>
			<PopularBooksByRatingContainer />
			<MostSoldBooksContainer />
		</div>
	);
};

export default PopularBooksContainer;
