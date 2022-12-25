
const Pricing = () => {
    return (
        <div className="sans h-full py-16">
           <header className="flex flex-col items-center mb-12">
            <h2 className="text-3xl text-primary-white font-bold text-neutral">Pricing</h2>
           </header>
          <section
            className="flex flex-col lg:flex-row  items-center lg:justify-center w-full lg:px-10 py-12 "
          >
            <article
              className="bg-secondary_color w-4/5 lg:w-custom mb-10 lg:px-4 py-10 text-center text-primary-dark"
            >
              <h5 className="font-bold text-base">Standard</h5>
              <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
                <span className="text-6xl mr-1">$</span
                ><span className="text-6xl"> 100</span>
              </h2>
              <ul className="text-sm font-bold">
                <li className="pt-4 pb-4 border-b border-gray-300">50,000 Requests</li>
                <li className="pt-3 pb-4 border-b border-gray-300">4 contributors</li>
                <li className="pt-4 pb-4 border-b border-gray-300">Up to 3 GB storage space</li>
              </ul>
              <button
                className=" uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold text-primary-very-light rounded-md bg-neutral"
              >
              Subscribe
              </button>
            </article>
            <article
              className=" bg-primary_color lg:w-custom w-4/5 mb-10 py-16 lg:-mt-6 text-white bg-primary-blue text-center"
            >
              <h5 className="font-bold text-base ">Pro</h5>
              <h2
                className="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center"
              >
                <span className="text-6xl mr-1">$</span
                ><span className="text-6xl "> 200</span>
              </h2>
              <ul className=" text-sm font-bold">
                <li className="pt-4 pb-4 border-b border-gray-200">100,000 Requests</li>
                <li className="pt-4 pb-4 border-b border-gray-200">7 contributors</li>
                <li className="pt-4 pb-4 border-b border-gray-200">Up to 6 GB storage space</li>
              </ul>
              <button
                className="uppercase text-center text-sm mt-10 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold bg-primary-very-light text-primary-white bg-neutral"
              >
                Subscribe
              </button>
            </article>
            <article
              className="bg-secondary_color w-4/5 lg:w-custom mb-10 lg:px-4 py-10 text-center text-primary-dark"
            >
              <h5 className="font-bold text-base">Expert</h5>
              <h2 className="flex justify-center pb-4 font-bold border-b border-gray-200">
                <span className="text-6xl mr-1">$</span
                ><span className="text-6xl">500</span>
              </h2>
              <ul className="text-sm font-bold">
                <li className="pt-4 pb-4 border-b border-gray-200">200,000 Requests</li>
                <li className="pt-4 pb-4 border-b border-gray-200">11 contributors</li>
                <li className="pt-4 pb-4 border-b border-gray-200">Up to 10 GB storage space</li>
              </ul>
              <button
                className="uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold text-primary-very-light bg-neutral"
              >
              Subscribe
              </button>
            </article>
          </section>
        </div>
    );
};

export default Pricing;