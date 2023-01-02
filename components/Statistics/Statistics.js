import { FaBook, FaRegSmile, FaShoppingCart, FaUsers } from "react-icons/fa";

const Statistics = () => {
    return (
        <div className="max-w-screen-xl mx-4 xl:mx-auto my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
                <div className="flex items-center gap-5 border-2 border-primary_color/60 rounded-lg shadow shadow-primary_color/70 p-10">
                    <div className="bg-slate-200 p-5 rounded-full">
                        <FaBook className="text-4xl text-primary_color"></FaBook>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">6500+</p>
                        <p className="font-medium">Total Books</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 border-2 border-primary_color/60 rounded-lg shadow shadow-primary_color/70 p-10">
                    <div className="bg-slate-200 p-5 rounded-full">
                        <FaUsers className="text-4xl text-primary_color"></FaUsers>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">1200+</p>
                        <p className="font-medium">Authors</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 border-2 border-primary_color/60 rounded-lg shadow shadow-primary_color/70 p-10">
                    <div className="bg-slate-200 p-5 rounded-full">
                        <FaShoppingCart className="text-4xl text-primary_color"></FaShoppingCart>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">3400+</p>
                        <p className="font-medium">Books Sold</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 border-2 border-primary_color/60 rounded-lg shadow shadow-primary_color/70 px-6 py-10">
                    <div className="bg-slate-200 p-5 rounded-full">
                        <FaRegSmile className="text-4xl text-primary_color"></FaRegSmile>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">95%</p>
                        <p className="font-medium">Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;