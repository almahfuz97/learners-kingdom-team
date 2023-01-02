import Link from 'next/link';
import { useRouter } from 'next/router'

const FeaturedCard = ({ category }) => {

    return (
        <Link href={`category/${category._id}`}>
            <div className="flex flex-col hover:text-primary_color cursor-pointer border-2 border-primary_color/40 px-4 py-8 group transition hover:shadow-lg rounded-lg">
                <img src={category.category_img} alt="" className="mx-auto w-16 transition group-hover:scale-105" />
                <h2 className="text-2xl font-medium text-center hover:text-primary_color mt-2">{category.category_name}</h2>
            </div>
        </Link>
    );
};

export default FeaturedCard;