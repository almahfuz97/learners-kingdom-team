const RecentlyAddedCard = () => {
    return (
        <div className=" mx-2 lg:my-8 w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src="/books.png" alt="book" className="object-cover rounded-xl" />
            <div className="px-4 py-3">

                <div className="mt-6 mb-2">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold tracking-wide">Book Name</h2>
                        <h2 className="text-xl font-semibold tracking-wide">Price: $15</h2>

                    </div>
                    <span className="block text-xs font-medium tracking-widest">Author</span>
                </div>
                <p className=" opacity-50 text-xs">Book description Book description Book description Book description Book description Bookk</p>

                <div className="flex justify-between mt-6 text-white">
                    <button type="button" className="px-8 py-3 font-semibold rounded bg-primary_color hover:bg-secondary_color">Details</button>

                    <button type="button" className=" bg-primary_color hover:bg-secondary_color px-8 py-3 font-semibold rounded">Read</button>
                </div>
            </div>

        </div>
    );
};

export default RecentlyAddedCard;