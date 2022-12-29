import MostSoldBookCard from './MostSoldBookCard';

const MostSoldBooksContainer = ({ mostSoldBooks }) => {
	return (
		<div className="mx-8 my-20">
			<h1 className="text-3xl mb-8 text-primary_color font-bold text-center my-2">
				Most Sold Books
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{mostSoldBooks?.map((book, index) => (
					<MostSoldBookCard book={book} key={index} />
				))}
			</div>
		</div>
	);
};

export default MostSoldBooksContainer;
