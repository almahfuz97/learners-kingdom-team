import { useRouter } from 'next/router'

const FeaturedCard = ({ category }) => {

    const router = useRouter();

    const handleClick = (id) => {
        router.push(`category/${id}`)
    }

    return (

        <div onClick={() => handleClick(category._id)} className="flex flex-col hover:text-primary_color cursor-pointer">
            <img src={category.category_img} alt="" className=" mx-auto w-20" />
            <h2 className="text-2xl font-semibold text-center hover:text-primary_color">{category.category_name}</h2>
        </div>

    );
};

export default FeaturedCard;