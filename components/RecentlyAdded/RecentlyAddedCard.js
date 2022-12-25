const RecentlyAddedCard = () => {
    return (
        <div class=" mx-2 my-8 max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

            <img src="/books.png" alt="book" class="object-cover rounded-xl" />
            <div class="px-4 py-3">

                <div className="mt-6 mb-2">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold tracking-wide">Book Name</h2>
                        <h2 className="text-xl font-semibold tracking-wide">Price: $15</h2>

                    </div>
                    <span className="block text-xs font-medium tracking-widest dark:text-violet-400">Author</span>
                </div>
                <p className="dark:text-gray-100">Book description Book description Book description Book description Book description Bookk</p>

                <div className="flex justify-between">
                    <button type="button" className="px-8 py-3 font-semibold rounded dark:border-gray-100 dark:text-gray-100 bg-primary_color hover:bg-secondary_color">Details</button>

                    <button type="button" className=" bg-primary_color hover:bg-secondary_color px-8 py-3 font-semibold rounded dark:border-gray-100 dark:text-gray-100">Read</button>
                </div>
            </div>

        </div>
    );
};

export default RecentlyAddedCard;