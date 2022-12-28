
const SimilarBooksCard = () => {
    return (
        <div className="flex flex-col gap-1 p-3 bg-primary_color/30 rounded-md">
            <img src="https://m.media-amazon.com/images/I/51olwOKm9rL.jpg" alt="" className="w-full max-h-80 object-cover rounded-t" />
            <h2 className="text-lg font-bold mt-1">Life Flight</h2>
            <p className="text-sm">⭐⭐⭐⭐⭐</p>
            <p className="text-sm font-medium text-gray-600">AuthorName</p>
            <p className="text-xl font-medium text-rose-500">$120.00</p>
        </div>
    );
};

export default SimilarBooksCard;