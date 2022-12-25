import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='mt-16 flex justify-center'>
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
                                transform: translate(10px,10px);
                            }
                            25% {
                                transform: translate(5px,-5px);
                            }

                            50% {transform: translate(-10px,-5px);}

                            75% {
                                transform: translate(-10px,10px);
                            }

                            100% {
                                transform: translate(10px,10px);
                            }
                          }
                        `
                    }
                </style>
                <input placeholder=' search books' type="text" className='border border-primary_color focus:border-r-0 focus:border-secondary_color rounded-lg rounded-r-none p-4' />
                <div className=' bg-primary_color rounded-r cursor-pointer hover:shadow '>
                    <div className='search-animation '>
                        <Image src={'/search-white.png'} width={56} height={56} className='p-1 search-animation ' ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
