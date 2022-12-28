import Image from 'next/image'
import React from 'react'
import SearchCard from './SearchCard'

export default function SearchInput({ register, watch, searchedBook }) {
    return (
        <>
            <div className=' flex'>
                <div className='relative'>
                    <input  {...register('search')} placeholder='Search books' type="text" className='border border-primary_color focus:border-r-0 focus:border-secondary_color rounded-lg rounded-r-none p-2 lg:p-4 lg:min-w-[400px] max-h-[40px] lg:max-h-[50px] outline-none' />
                    <div className='absolute  font-bold bg-white w-full '>
                        {
                            searchedBook?.map(book => <SearchCard key={book._id} book={book} />)
                        }

                    </div>
                </div>

                <div className=' bg-primary_color rounded-r cursor-pointer hover:shadow px-2  max-h-[40px] lg:max-h-[50px]'>
                    <div className='search-animation '>
                        <Image src={'/search-white.png'} width={45} height={45} className='p-1 search-animation ' alt=''></Image>
                    </div>
                </div>
            </div>

        </>
    )
}
