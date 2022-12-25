import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className=' relative img-gradient'>
            <Image src={'https://i.ibb.co/KVqN4n7/3025.jpg'} width={2000} height={800} className='w-full h-full' />
            <div className=' absolute top-[15%] lg:top-[20%] w-full flex justify-center z-10'>
                <div>
                    <h1 className=' text-center lg:text-3xl text-base font-bold text-white'>Welcome to <span className=' font-bold text-primary_color'>Learner's</span> <span className=' text-secondary_color font-bold'>Kingdom</span></h1>
                    <p className='hidden md:block text-white text-center mt-2 opacity-80 text-xs'>Read more to grow more. <br /> Only one search away from finding your desired book!</p>
                </div>
            </div>

            <div className=' absolute w-full top-[40%]  z-10'>
                <div className=' flex justify-center'>
                    <div className=' flex'>
                        <style jsx>
                            {
                                `
                        .search-animation {
                            
                            animation-name: search-anim;
                            animation-duration: 3s;
                            animation-iteration-count: infinite;
                          }
                          
                          @keyframes search-anim {
                            0% {
                                transform: rotate(0deg) translateX(5px) rotate(0deg);
                             }
                             100% {
                                transform: rotate(360deg) translateX(5px) rotate(-360deg);
                             }
                          }
                        `
                            }
                        </style>
                        <input placeholder=' Search books' type="text" className='border border-primary_color focus:border-r-0 focus:border-secondary_color rounded-lg rounded-r-none p-2 lg:p-4 lg:min-w-[400px] max-h-[40px] lg:max-h-[50px] outline-none' />

                        <div className=' bg-primary_color rounded-r cursor-pointer hover:shadow px-2  max-h-[40px] lg:max-h-[50px]'>
                            <div className='search-animation '>
                                <Image src={'/search-white.png'} width={45} height={45} className='p-1 search-animation ' ></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
