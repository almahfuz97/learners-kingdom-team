import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='mt-16 flex justify-center'>
            <div className=' flex'>
                <input placeholder=' search books' type="text" className='border border-primary_color focus:border-r-0 focus:border-secondary_color rounded-lg rounded-r-none p-4' />
                <div className=' bg-primary_color rounded-r cursor-pointer hover:shadow'>
                    <Image src={'/search-white.png'} width={56} height={56} className=' animate-pulse' ></Image>
                </div>
            </div>
        </div>
    )
}
