const ReviewCard = () => {
    return (
	<div className="lg:mx-2 lg:my-8 max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  "> 
		<div className="container max-w-xl mx-auto">
			<div className="flex flex-col items-center w-full p-2 space-y-8 rounded-md lg:h-full lg:p-2 dark:bg-gray-900 dark:text-gray-100">
				<img src="/reviewman.png" alt="" className="w-24 h-24 rounded-full dark:bg-gray-500" />
				<div className="text-center dark:text-gray-400">
					<p className=" text-primary_color font-bold text-xl">Leroy Jenkins</p>
				</div>
				<blockquote className="max-w-lg px-4 text-lg italic font-medium text-center">
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
		It's an exciting place to be a learner.There are so many outstanding books,so don't waste your time on average books! Still, it can take time to find books worth reading. It features top books to read in popular categories, such as fiction, business, personal development, travel, and more.
		</blockquote>
				
					
			</div>
		</div>
	</div>
 );
};

export default ReviewCard;