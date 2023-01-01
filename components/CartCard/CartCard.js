import Image from 'next/image';
import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const CartCard = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <div className='max-w-[100px] md:max-w-none'>
                    <Image src="/books.png" width={140} height={120}></Image>
                </div>
                <div>
                    <p className='text-xl font-medium'>Name</p>
                    <p className='text-sm'>Author</p>
                </div>
            </div>
            <div className='flex items-center gap-6 text-lg'>
                <p>$<span className='font-medium'>54</span></p>
                <button className='hover:bg-red-100 p-2 rounded-full text-red-600 hover:scale-110 cursor-pointer transition'><FaRegTrashAlt title='Remove' className=''></FaRegTrashAlt></button>
            </div>
        </div>
    );
};

export default CartCard;