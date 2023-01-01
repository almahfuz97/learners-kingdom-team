import Link from 'next/link';
import { useRouter } from 'next/router'

const FeaturedCard = ({ category }) => {

    return (
        <Link href={`category/${category._id}`}>
            <div className="flex flex-col hover:text-primary_color cursor-pointer">
                <img src={category.category_img} alt="" className=" mx-auto w-20" />
                <h2 className="text-2xl font-semibold text-center hover:text-primary_color">{category.category_name}</h2>
            </div>
        </Link>
    );
};

export default FeaturedCard;