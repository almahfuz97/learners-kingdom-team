import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import SearchCard from './SearchCard'

export default function SearchInput({ books }) {
    const [searchedBook, setSearchedBook] = useState();
    const { register, handleSubmit, watch } = useForm();
    const router = useRouter();

    const handleKeyUp = e => {
        console.log(e.key)
        if (e.key === 'Enter') {
            router.push({
                pathname: '/category',
                query: {
                    searchText: watch('search')
                }
            })
        }
    }


    useEffect(() => {
        const searchText = watch('search');
        const result = books.filter(book => book.bookName.toLowerCase().includes(searchText.toLowerCase()) || book.authorName.toLowerCase().includes(searchText.toLowerCase()));
        if (watch('search') === '') setSearchedBook(null);
        else {
            setSearchedBook(result);
        }

    }, [watch('search')])
    return (
        <>
            <div className=' flex lg:mt-4'>
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
                <div className='relative'>
                    <input onKeyUp={handleKeyUp}  {...register('search')} placeholder='Search books' type="text" className={`border border-primary_color focus:border-r-0 focus:border-secondary_color rounded-lg ${watch('search')?.length > 0 && 'rounded-bl-none'} rounded-r-none p-2 lg:p-4 lg:min-w-[400px] max-h-[40px] lg:max-h-[55px] outline-none`} />
                    <div className='absolute font-bold bg-secondary_color rounded-b-lg w-full max-h-[400px] lg:max-h-[300px] overflow-y-scroll'>
                        {
                            searchedBook?.map(book => <SearchCard key={book._id} book={book} />)
                        }

                    </div>
                </div>

                <div className=' bg-primary_color rounded-r cursor-pointer hover:shadow px-2  max-h-[40px] lg:max-h-[55px]'>
                    <div className='search-animation '>
                        <Image src={'/search-white.png'} width={45} height={45} className='p-1 search-animation ' alt=''></Image>
                    </div>
                </div>
            </div>

        </>
    )
}
