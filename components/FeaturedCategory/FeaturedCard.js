import React from 'react';

const FeaturedCard = ({ category }) => {
    return (

        <div className="flex flex-col w-52 duration-300 hover:scale-110 hover:shadow-xl">
            <img src={category.category_img} alt="" className=" mx-auto w-20 " />
            <h2 className="text-2xl font-semibold text-center">{category.category_name}</h2>
        </div>

    );
};

export default FeaturedCard;