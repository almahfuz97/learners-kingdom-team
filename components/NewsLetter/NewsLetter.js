import Image from 'next/image';
import React from 'react';
import subscribe from './subscribe.png';

const NewsLetter = () => {
    return (
        <section className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 mt-10'>
            <div className='md:flex items-center justify-center mx-auto'>
                <div className='max-w-xs hidden md:block'>
                    <Image src={subscribe} alt='subscribe'>
                    </Image>
                </div>
                <div className="max-w-md mx-auto md:mx-0">
                    <strong className="block text-center text-xl font-medium md:text-2xl">
                        Subscribe to our Newsletter
                    </strong>
                    <form className="mt-6">
                        <div className="relative max-w-lg">
                            <label className="sr-only" htmlFor="email"> Email </label>
                            <input
                                className="w-full md:min-w-[440px] rounded-full p-3 pl-5 pr-32 input border border-primary_color outline-primary_color"
                                id="email"
                                type="email"
                                placeholder="john@doe.com"
                            />
                            <button className="absolute top-1/2 right-0 -translate-y-1/2 h-full rounded-l-none rounded-full text-white bg-primary_color px-5 py-3 font-medium transition text-lg tracking-wide hover:bg-primary_color/80" type="button">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;