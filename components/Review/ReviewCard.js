const ReviewCard = ({ review }) => {
	return (
		<div className=" lg:my-8  bg-white shadow-md rounded-xl  hover:shadow-xl  mx-4">
			<div className="container max-w-xl mx-auto">
				<div className="flex flex-col items-center w-full p-2 space-y-8 rounded-md lg:h-full lg:p-2 ">
					<img src={review.img} alt="" className="w-24 h-24 rounded-full" />
					<div className="text-center ">
						<p className=" text-primary_color font-bold text-xl">{review.name}</p>
					</div>
					<blockquote className="max-w-lg px-4 h-40 text-base italic text-center">
						<svg aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="quote-left"
							className="w-6 pr-2 inline-block"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512">
							<path
								fill="currentColor"
								d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
							></path>
						</svg>
						{review.reviewContent}
					</blockquote>


				</div>
			</div>
		</div>
	);
};

export default ReviewCard;