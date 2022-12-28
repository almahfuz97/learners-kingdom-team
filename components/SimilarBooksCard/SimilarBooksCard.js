
const SimilarBooksCard = ({ book }) => {
    return (
        <div className="flex flex-col gap-1 p-3 bg-primary_color/30 rounded-md hover:scale-105 transition-all">
            <img src={book?.picture} alt="" className="w-full h-64 object-cover rounded-t" />
            <h2 className="text-lg font-bold mt-1">{book?.bookName}</h2>
            {/* <p className="text-sm">{[...Array(parseInt(book?.rating))].map((_, i) => '⭐')}</p> */}
            <p className="text-sm font-medium text-gray-600">{book?.authorName}</p>
            <p className="text-xl font-medium text-rose-500">${book?.price}</p>
        </div>
    );
};

export default SimilarBooksCard;