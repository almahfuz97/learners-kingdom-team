import { useRouter } from "next/router";
const RecentlyAddedCard = ({ data }) => {
    const router = useRouter();
    return (
        <div className=" mx-2 lg:my-8 w-xs drop-shadow-lg bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">

            <img src={data.picture} alt="book" className="object-cover object-center w-full rounded-md h-80" />
            <div className="px-4 py-3">

                <div className="mt-2 mb-2 ">
                    <div className="flex justify-between">
                        <h2 className="text-lg w-full font-semibold tracking-wide drop-shadow">{data.bookName}</h2>
                    </div>
                    <span className="block text-xs font-medium tracking-widest">{data.authorName}</span>
                </div>
                <p className=" opacity-50 text-xs">{data.description.slice(0, 60)}</p>
                <p className="text-md mt-2 tracking-wide">Price: ${data.price}</p>
                <div className="flex justify-between mt-6 text-white">
                    <button onClick={() => router.push(`/book/${data._id},${data.categoryID}`)} className="px-4 py-3 font-semibold text-slate-500 hover:text-white rounded hover:bg-primary_color bg-secondary_color">Details</button>

                    <img src="/add.png" alt="" className="w-12 cursor-pointer hover:scale-105" />
                </div>
            </div>

        </div>
    );
};

export default RecentlyAddedCard;