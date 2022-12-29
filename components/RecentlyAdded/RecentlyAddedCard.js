const RecentlyAddedCard = ({ data }) => {
    return (
        <div className=" mx-2 lg:my-8 w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src={data.picture} alt="book" className="object-cover object-center w-full rounded-md h-80" />
            <div className="px-4 py-3">

                <div className="mt-6 mb-2">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold tracking-wide">{data.bookName}</h2>
                        <h2 className="text-xl font-semibold tracking-wide">Price: ${data.price}</h2>

                    </div>
                    <span className="block text-xs font-medium tracking-widest">{data.authorName}</span>
                </div>
                <p className=" opacity-50 text-xs">{data.description.slice(0, 100)}</p>

                <div className="flex justify-between mt-6 text-white">
                    <button type="button" className="px-8 py-3 font-semibold rounded hover:bg-primary_color bg-secondary_color">Details</button>

                    <button type="button" className="  hover:bg-primary_color bg-secondary_color px-8 py-3 font-semibold rounded">Add to Cart</button>
                </div>
            </div>

        </div>
    );
};

export default RecentlyAddedCard;