const RecentlyAddedCard = () => {
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src="/book.jpg" alt="" className="object-cover object-center w-full rounded-md h-80 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold tracking-wide">Book Name</h2>
                        <h2 className="text-xl font-semibold tracking-wide">Price: $15</h2>

                    </div>
                    <span className="block text-xs font-medium tracking-widest dark:text-violet-400">Author</span>
                </div>
                <p className="dark:text-gray-100">Book description Book description Book description Book description Book description Book</p>

                <div className="flex justify-between">
                    <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Details</button>

                    <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Read</button>
                </div>


            </div>
        </div>
    );
};

export default RecentlyAddedCard;