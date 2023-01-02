import Link from "next/link";
import { FaCartPlus, IconName } from "react-icons/fa";

const RecentlyAddedCard = ({ data }) => {

    return (
        <div className="mx-4 lg:my-8 bg-white shadow-md shadow-primary_color/30 rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src={data.picture} alt="book" className="object-cover object-center w-full rounded-t-md h-80" />
            <div className="px-4 py-3">

                <div className="mt-2 mb-2 ">
                    <div className="flex justify-between">
                        <h2 className="text-lg w-full font-semibold tracking-wide drop-shadow">{data.bookName}</h2>
                    </div>
                    <span className="block text-xs font-medium tracking-widest">{data.authorName}</span>
                </div>
                <p className="mt-2 tracking-wide">Price: <span className="text-rose-600 font-bold text-lg">${data.price}</span></p>
                <div className="flex justify-between mt-4 text-primary_color">
                    <Link href={`/book/${data._id},${data.categoryID}`} className="w-1/2 px-4 py-2 font-semibold text-center rounded border-2 border-primary_color hover:bg-primary_color hover:text-white"><button>Details</button></Link>
                    <button className="text-2xl rounded px-4 border-2 border-primary_color hover:bg-primary_color hover:text-white"><FaCartPlus></FaCartPlus></button>
                </div>
            </div>

        </div>
    );
};

export default RecentlyAddedCard;