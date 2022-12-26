const MostSoldBookCard = () => {
	return (
		<div className="p-3 rounded-md shadow-md bg-red-50 dark:bg-gray-900 dark:text-gray-50 hover:scale-105 duration-500">
			<div id="image">
				<img
					src="/advertise-demo.jpg"
					className="object-cover object-center w-full rounded-md h-80 dark:bg-gray-500"
				/>
			</div>
			<div
				id="information"
				className="flex items-center justify-between mt-2"
			>
				<div>
					<h1 className="text-xl font-bold text-primary_color">
						Book Name
					</h1>
					<p className="text-lg font-medium text-secondary_color">
						Author Name
					</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<div
						style={{
							borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ',
						}}
						className="w-10 h-10 bg-yellow-500 flex flex-col items-center justify-center"
					>
						<p className="text-white font-medium text-lg">162</p>
					</div>
				</div>
			</div>
			<div id="description">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Non cumque facere perferendis voluptates nam officia...
				</p>
			</div>
			<div
				id="actions"
				className="mt-2 flex items-center justify-between"
			>
				<button className="bg-secondary_color px-3 py-2 rounded-md font-medium text-lg">
					Details
				</button>
				<button className="bg-primary_color px-3 py-2 rounded-md font-medium text-lg">
					Book Now
				</button>
			</div>
		</div>
	);
};

export default MostSoldBookCard;
