import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
	return (
		<div className="m-4 my-8 bg-white shadow-md shadow-primary_color/40 rounded-xl hover:shadow-xl hover:scale-105 transition duration-300">
			<div className="max-w-xl mx-auto">
				<div className="flex flex-col items-center w-full p-2 space-y-8 rounded-md lg:h-full lg:p-2 ">
					<img src={review.img} alt="" className="w-24 h-24 rounded-full" />
					<div className="text-center ">
						<p className=" text-primary_color font-bold text-xl">{review.name}</p>
					</div>
					<blockquote className="max-w-lg px-4 pb-4 text-base italic text-center">
						<FaQuoteLeft className="inline text-2xl text-primary_color mr-2"></FaQuoteLeft>
						{review.reviewContent}
					</blockquote>


				</div>
			</div>
		</div>
	);
};

export default ReviewCard;