import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedCategory = ({ categories }) => {

    return (
        <div className="mx-8 my-20">
            <h2 className="text-3xl mb-8 text-primary_color font-bold text-center my-2" >Features Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-10 w-9/12">

                {
                    categories?.map(category => <FeaturedCard
                        key={category._id}
                        category={category}
                    ></FeaturedCard>)
                }

                <div className="flex flex-col w-52">
                    <img src='/category/other.png' alt="" className=" mx-auto w-20 " />
                    <h2 className="text-2xl font-semibold text-center">Others</h2>
                </div>


            </div>





        </div>
    );
};

export default FeaturedCategory;