import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import SearchCard from '../SearchInput/SearchCard';
import SearchInput from '../SearchInput/SearchInput';

export default function Banner({ books }) {
    console.log(books)
    const [text, setText] = useState('');
    const { register, handleSubmit, watch } = useForm();
    const [searchedBook, setSearchedBook] = useState();

    console.log(searchedBook);
    useEffect(() => {
        const searchText = watch('search');
        const result = books.filter(book => book.bookName.toLowerCase().includes(searchText.toLowerCase()));
        if (watch('search') === '') setSearchedBook(null);
        else {
            setSearchedBook(result);
        }

    }, [watch('search')])

    return (
        <div className=' relative img-gradient'>
            <Image src={'https://i.ibb.co/KVqN4n7/3025.jpg'} width={2000} height={800} className='w-full h-full' alt='' />
            <div className=' absolute top-[15%] lg:top-[20%] w-full flex justify-center z-10'>
                <div>
                    <h1 className=' text-center lg:text-3xl text-base font-bold text-white'>Welcome to <span className=' font-bold text-primary_color'>Learner's</span> <span className=' text-secondary_color font-bold'>Kingdom</span></h1>
                    <p className='hidden md:block text-white text-center mt-2 opacity-80 text-xs'>Read more to grow more. <br /> Only one search away from finding your desired book!</p>
                </div>
            </div>

            <div className=' absolute w-full top-[40%]  z-10'>
                <div className=' flex justify-center'>
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
                    <SearchInput register={register} watch={watch} searchedBook={searchedBook} />
                </div>

            </div>

        </div >
    )
}
