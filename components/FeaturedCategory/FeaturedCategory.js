import FeaturedCard from "./FeaturedCard";

const FeaturedCategory = () => {
    return (
        <div className="w-11/12 mx-auto my-20">
            <h2 className="text-3xl mb-8 text-primary_color font-bold text-center my-2" >Features Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-10 w-9/12">

                <FeaturedCard></FeaturedCard>


                <div className="flex flex-col w-52">
                    <img src="/category/classic.jpg" alt="" className=" mx-auto w-20 " />
                    <h2 className="text-2xl font-semibold text-center">Classics</h2>
                </div>


                <div className="flex flex-col w-52">
                    <img src="/category/crime.jpg" alt="" className=" mx-auto w-20 " />
                    <h2 className="text-2xl font-semibold text-center">Crime</h2>
                </div>


                <div className="flex flex-col w-52">
                    <img src="/category/horror.jpg" alt="" className=" mx-auto w-20 " />
                    <h2 className="text-2xl font-semibold text-center">Horror</h2>
                </div>


                <div className="flex flex-col w-52">
                    <img src="/category/romance.jpg" alt="" className=" mx-auto w-20 " />
                    <h2 className="text-2xl font-semibold text-center">Romance</h2>
                </div>


                <div className="flex flex-col w-52">
                    <img src="/category/science.jpg" alt="" className=" mx-auto w-20 " />
                    <h2 className="text-2xl font-semibold text-center">Science</h2>
                </div>


                <div className="flex flex-col w-52">
                    <img src="/category/Thrillers.jpg" alt="" className=" mx-auto w-20" />
                    <h2 className="text-2xl font-semibold text-center">Thrillers</h2>
                </div>








            </div>





        </div>
    );
};

export default FeaturedCategory;