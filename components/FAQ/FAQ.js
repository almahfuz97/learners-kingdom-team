import Image from "next/image";

const FAQ = () => {
	return (
		<div className="max-w-screen-xl xl:mx-auto mx-4 my-20">
			<h1 className="text-3xl text-primary_color font-bold text-center mb-12">
				Frequently Asked Questions
			</h1>
			<div className="flex gap-8">
				<div className="space-y-4 flex-1 my-auto">
					{[...Array(5)].map((_, index) => (
						<details
							key={index}
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
				<div className="hidden lg:block">
					<Image src="/faq-section.svg" width={500} height={500} alt="faq"></Image>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
