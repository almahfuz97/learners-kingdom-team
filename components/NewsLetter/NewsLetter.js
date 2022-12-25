import Image from 'next/image';
import React from 'react';
import subscribe from './subscribe.png';

const NewsLetter = () => {
    return (
        <section className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 mt-10'>
            <div className='md:flex items-center justify-center gap:16 lg:gap-24 mx-auto'>
                <div className='max-w-sm lg:max-w-md hidden md:block'>
                    <Image src={subscribe} alt='subscribe'>
                    </Image>
                </div>
                <div className="max-w-md mx-auto md:mx-0">
                    <strong className="block text-center text-xl font-medium md:text-2xl">
                        Want us to email you with the latest deals?
                    </strong>
                    <form className="mt-6">
                        <div className="relative max-w-lg">
                            <label className="sr-only" htmlFor="email"> Email </label>
                            <input
                                className="w-full rounded-full p-4 pr-32 input border border-primary_color"
                                id="email"
                                type="email"
                                placeholder="john@doe.com"
                            />
                            <button className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-primary_color px-5 py-3 text-sm font-medium transition" type="button">
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