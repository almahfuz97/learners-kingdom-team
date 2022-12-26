
const Pricing = () => {
  return (
    <div className="sans h-full my-16">
      <header className="flex flex-col items-center mb-6">
        <h2 className="text-3xl mb-4 text-primary_color font-bold text-center my-2">Our Subscription Plan</h2>
      </header>
      <section
        className="flex flex-col lg:flex-row  items-center lg:justify-center w-full lg:px-10 py-12 "
      >
        <article
          // className="bg-secondary_color w-4/5 lg:w-custom mb-10 lg:px-4 py-10 hover:py-16 hover:bg-primary_color text-center text-primary-dark"
          className="w-4/5 lg:w-custom mb-10 lg:px-4 py-10 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:bg-slate-400"
        >
          <h5 className="text-center font-bold text-base uppercase py-3">Personal</h5>
          <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
            <span className="text-6xl mr-1">$</span
            ><span className="text-6xl"> 100</span>
          </h2>
          <ul className="text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-300">500 boks</li>
            <li className="pt-3 pb-4 border-b border-gray-300">3 Devices allowed</li>
            <li className="pt-4 pb-4 border-b border-gray-300">Up to 3 GB storage download</li>
          </ul>
          <button
            className=" uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-4 w-full font-bold text-primary-very-light rounded-md bg-neutral"
          >
            Subscribe
          </button>
        </article>
        <article
          className=" w-4/5 mx-5 lg:w-custom mb-10 lg:px-4 py-10 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:bg-slate-400"
        >
          <h5 className="text-center font-bold text-base uppercase py-3">Family</h5>
          <h2
            className="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center"
          >
            <span className="text-6xl mr-1">$</span
            ><span className="text-6xl "> 200</span>
          </h2>
          <ul className=" text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-200">5000 books</li>
            <li className="pt-4 pb-4 border-b border-gray-200">30 Devices allowed</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Up to 6 GB storage download</li>
          </ul>
          <button
            className="uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-4 w-full font-bold text-primary-very-light rounded-md bg-neutral"
          >
            Subscribe
          </button>
        </article>
        <article
          className="w-4/5 lg:w-custom mb-10 lg:px-4 py-10 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:bg-slate-400"
        >
          <h5 className="text-center font-bold text-base uppercase py-3">Institution</h5>
          <h2 className="flex justify-center pb-4 font-bold border-b border-gray-200">
            <span className="text-6xl mr-1">$</span
            ><span className="text-6xl">500</span>
          </h2>
          <ul className="text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-200">10000 books</li>
            <li className="pt-4 pb-4 border-b border-gray-200">500 Devices allowed</li>
            <li className="pt-4 pb-4 border-b border-gray-200">Up to 10 GB storage download</li>
          </ul>
          <button
            className="uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-4 w-full font-bold text-primary-very-light rounded-md bg-neutral"
          >
            Subscribe
          </button>
        </article>
      </section>
    </div>
  );
};

export default Pricing;