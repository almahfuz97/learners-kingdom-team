import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const CartCard = ({ bookId, handleDelete }) => {

    const [book, setBook] = useState({})
    useEffect(() => {
        fetch(`/api/books/${bookId}`)
            .then(res => res.json())
            .then(data => setBook(data))
            .catch(error => console.log(error))
    }, [])

    return (
        book?._id ?
            <div className='flex justify-between border-b-2 last:border-b-0 pb-3 mb-2 last:pb-0 last:mb-0 gap-2'>
                <div className='flex items-center gap-2 sm:gap-4'>
                    <div className='w-[100px] h-[120px] overflow-hidden'>
                        <Image src={book.picture} width={100} height={120} alt={book.bookName} className="object-cover w-full h-full"></Image>
                    </div>
                    <div className='flex flex-col gap-2 sm:gap-4'>
                        <div>
                            <p className='sm:text-xl font-medium'>{book.bookName}</p>
                            <p className='text-sm mt-0 sm:mt-1'>{book.authorName}</p>
                        </div>
                        <div className='flex items-center gap-4 text-lg sm:hidden'>
                            <p>$<span className='font-medium'>{book.price}</span></p>
                            <button className='hover:bg-red-100 p-2 rounded-full text-red-600 hover:scale-110 cursor-pointer transition'><FaRegTrashAlt title='Remove' className=''></FaRegTrashAlt></button>
                        </div>
                    </div>
                </div>
                <div className='sm:flex items-center gap-2 sm:gap-6 text-lg hidden'>
                    <p>$<span className='font-medium'>{book.price}</span></p>
                    <button onClick={() => handleDelete(bookId)} className='hover:bg-red-100 p-2 rounded-full text-red-600 hover:scale-110 cursor-pointer transition'><FaRegTrashAlt title='Remove' className=''></FaRegTrashAlt></button>
                </div>

            </div>
            :
            <div className='flex justify-between border-b-2 last:border-b-0 pb-3 mb-2 last:pb-0 last:mb-0 gap-2 animate-pulse'>
                <div className='flex items-center gap-2 sm:gap-4'>
                    <div className='w-[100px] h-[120px] bg-slate-300'></div>
                    <div className='flex flex-col gap-2 sm:gap-4'>
                        <div>
                            <div className='w-[160px] h-[22px] bg-slate-300 rounded-lg'></div>
                            <div className='w-[120px] h-[18px] bg-slate-300 rounded-lg mt-2'></div>
                        </div>
                        <div className='flex items-center gap-4 text-lg sm:hidden'>
                            <div className='w-[34px] h-[20px] bg-slate-300 rounded-lg inline-block'></div>
                            <button className='p-2 rounded-full text-red-600 cursor-not-allowed'><FaRegTrashAlt title='Remove' className=''></FaRegTrashAlt></button>
                        </div>
                    </div>
                </div>
                <div className='sm:flex items-center gap-2 sm:gap-6 text-lg hidden'>
                    <div className='w-[34px] h-[20px] bg-slate-300 rounded-lg inline-block'></div>
                    <button className='p-2 rounded-full text-red-600 cursor-not-allowed'><FaRegTrashAlt title='Remove' className=''></FaRegTrashAlt></button>
                </div>
            </div>
    );
}

export default CartCard;