import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import SearchCard from '../SearchInput/SearchCard';
import SearchInput from '../SearchInput/SearchInput';

export default function Banner({ books }) {
    const router = useRouter();
    return (
        <div className=' relative img-gradient'>
            <Image src={'https://i.ibb.co/KVqN4n7/3025.jpg'} width={2000} height={800} className='w-full h-full min-h-[40vh]' alt='' />
            <div className=' absolute top-[15%] lg:top-[20%] w-full flex justify-center z-10'>
                <div>
                    <h1 className=' text-center lg:text-3xl text-base font-bold text-white'>Welcome to <span className=' font-bold text-primary_color'>Learner's</span> <span className=' text-secondary_color font-bold'>Kingdom</span></h1>
                    <p className='hidden md:block text-white text-center opacity-80 text-xs mt-2'>Read more to grow more. <br /> Only one search away from finding your desired book!</p>
                </div>
            </div>

            <div className=' absolute w-full top-[40%]  z-10'>
                <div className=' flex justify-center'>
                    <SearchInput books={books} />
                </div>

            </div>

        </div >
    )
}
