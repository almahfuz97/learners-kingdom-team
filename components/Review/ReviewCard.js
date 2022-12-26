const ReviewCard = () => {
    return (
	<div className="m-3 rounded"> 
		<div className="container max-w-xl mx-auto">
			<div className="flex flex-col items-center w-full p-2 space-y-8 rounded-md lg:h-full lg:p-2 dark:bg-gray-900 dark:text-gray-100">
				<img src="/reviewman.png" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
				<div className="text-center dark:text-gray-400">
					<p className=" text-primary_color font-bold text-xl">Leroy Jenkins</p>
				</div>
				<blockquote className="max-w-lg text-lg italic font-medium text-center">It's an exciting place to be a learner.There are so many outstanding books,so don't waste your time on average books! Still, it can take time to find books worth reading. It features top books to read in popular categories, such as fiction, business, personal development, travel, and more.So, if you're wondering, “what book should I read next?” It's covered here.</blockquote>
				
					
			</div>
		</div>
	</div>
 );
};

export default ReviewCard;