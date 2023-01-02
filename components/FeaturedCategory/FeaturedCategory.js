import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedCategory = ({ categories }) => {

    return (
        <div className="max-w-screen-xl mx-4 xl:mx-auto my-20">
            <h2 className="text-3xl mb-8 text-primary_color font-bold text-center my-2" >Features Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mt-12">
                {
                    categories?.map(category => <FeaturedCard
                        key={category._id}
                        category={category}
                    ></FeaturedCard>)
                }

            </div>





        </div>
    );
};

export default FeaturedCategory;