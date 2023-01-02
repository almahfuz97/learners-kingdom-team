
const Pricing = () => {

  return (
    <div className="max-w-screen-xl xl:mx-auto mx-4 my-20 ">
      <h2 className="text-3xl text-primary_color font-bold text-center mb-12">Our Subscription Plan</h2>
      <section className="flex flex-col lg:flex-row items-center lg:justify-center w-full gap-8 text-gray-800">
        <article
          className="w-full p-4 md:p-10 shadow-md rounded-lg border-2 border-primary_color/60 duration-500 hover:scale-105 hover:bg-primary_color/20 group"
        >
          <h5 className="text-center font-bold text-base uppercase py-3">Personal</h5>
          <h2 className="pb-4 flex justify-center font-bold">
            <span className="text-5xl mr-1">$</span>
            <span className="text-5xl"> 100</span>
          </h2>
          <ul className="text-sm font-bold my-8">
            <li className="py-3 text-center md:text-justify border-b group-hover:border-white">500 boks</li>
            <li className="py-3 text-center md:text-justify border-b group-hover:border-white">3 Devices allowed</li>
            <li className="py-3 text-center md:text-justify">Up to 3 GB storage download</li>
          </ul>
          <button
            className=" uppercase text-center py-3 w-full font-bold rounded bg-primary_color text-white"
          >
            Subscribe
          </button>
        </article>
        <article
          className="w-full p-4 md:p-10 shadow-md rounded-lg border-2 border-primary_color/60 duration-500 hover:scale-105 hover:bg-primary_color/20 group"
        >
          <h5 className="text-center font-bold text-base uppercase py-3">Family</h5>
          <h2
            className="font-bold pb-4 mt-2 flex justify-center"
          >
            <span className="text-5xl mr-1">$</span>
            <span className="text-5xl "> 200</span>
          </h2>
          <ul className="text-sm font-bold my-8">
            <li className="py-3 text-center md:text-justify border-b group-hover:border-white">5000 books</li>
            <li className="py-3 text-center md:text-justify border-b group-hover:border-white">30 Devices allowed</li>
            <li className="py-3 text-center md:text-justify">Up to 6 GB storage download</li>
          </ul>
          <button
            className="uppercase text-center py-3 w-full font-bold rounded bg-primary_color text-white"
          >
            Subscribe
          </button>
        </article>
        <article
          className="w-full p-4 md:p-10 shadow-md rounded-lg border-2 border-primary_color/60 duration-500 hover:scale-105 hover:bg-primary_color/20 group"
        >
          <h5 className="text-center font-bold text-base uppercase py-3">Institution</h5>
          <h2 className="flex justify-center pb-4 font-bold">
            <span className="text-5xl mr-1">$</span>
            <span className="text-5xl">500</span>
          </h2>
          <ul className="text-sm font-bold my-8">
            <li className="py-3 text-center md:text-justify border-b group-hover:border-white">10000 books</li>
            <li className="py-3 text-center md:text-justify border-b group-hover:border-white">500 Devices allowed</li>
            <li className="py-3 text-center md:text-justify">Up to 10 GB storage download</li>
          </ul>
          <button
            className="uppercase text-center py-3 w-full font-bold rounded bg-primary_color text-white"
          >
            Subscribe
          </button>
        </article>
      </section>
    </div>
  );
};

export default Pricing;