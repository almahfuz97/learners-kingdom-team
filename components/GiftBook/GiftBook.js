import Link from "next/link";

const GiftBook = () => {
    return (
        <div className="w-full h-[80vh] relative my-20 flex flex-col justify-center items-center text-center">
            <div className='absolute inset-0'>
                <img src="https://i.ibb.co/sFVvQ0t/gift-book.jpg" alt="" className="w-full h-full object-cover " />
            </div>
            <div className="relative flex flex-col">
                <p className="text-primary_color font-bold">Learner's Kingdom</p>
                <h2 className="text-4xl font-bold">A Wonderful Gift</h2>
                <p className="text-lg mt-4">Find the perfect gift for everyone on your list</p>
                <div>
                    <Link href='/category'><button className="px-4 py-3 font-semibold text-white rounded bg-primary_color mt-6">Discover Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default GiftBook;