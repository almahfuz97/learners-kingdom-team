const FAQ = () => {
	return (
		<div className="mx-8 my-16">
			<h1 className="text-3xl text-primary_color font-bold text-center my-4">
				Frequently Asked Questions
			</h1>
			<div className="space-y-4">
				{[...Array(3)].map((_, index) => (
					<details
						kye={index}
						className="w-full border rounded-lg focus:border-primary_color duration-500"
					>
						<summary className="px-4 py-3 border border-primary_color focus:outline-none rounded-xl cursor-pointer font-medium text-primary_color">
							Why Should You Choose Us?
						</summary>
						<div className="px-4 py-6 pt-0 ml-4 mt-2 text-black">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Beatae nesciunt soluta aut aliquid facere
							reprehenderit, architecto impedit omnis voluptate
							ipsum vel maiores doloremque consectetur blanditiis
							atque ad! Asperiores voluptatum itaque ducimus velit
							odit rem! Odio suscipit nostrum distinctio dolores,
							quibusdam, facilis atque a perspiciatis consequuntur
							dignissimos quos, facere officiis amet.
						</div>
					</details>
				))}
			</div>
		</div>
	);
};

export default FAQ;
