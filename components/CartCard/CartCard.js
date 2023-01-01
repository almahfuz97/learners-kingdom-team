import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const CartCard = ({ bookId, handleDelete }) => {

    const [book, setBook] = useState({})
    useEffect(() => {
        fetch(`${process.env.URL}/api/books/${bookId}`)
            .then(res => res.json())
            .then(data => setBook(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='flex justify-between border-b-2 last:border-b-0 pb-3 mb-2 last:pb-0 last:mb-0'>
            <div className='flex items-center gap-4'>
                {
                    book?.picture ?
                        <div className='max-w-[100px] max-h-[130px] overflow-hidden'>
                            <Image src={book.picture ? book.picture : ""} width={100} height={130} alt={book.bookName}></Image>
                        </div>
                        :
                        <div className='max-w-[100px] max-h-[130px] bg-slate-300 animate-pulse'></div>
                }
                <div className='flex flex-col gap-4'>
                    <div>
                        <p className='text-lg sm:text-xl font-medium'>{book.bookName}</p>
                        <p className='text-sm mt-0 sm:mt-1'>{book.authorName}</p>
                    </div>
                    <div className='flex items-center gap-2 sm:gap-6 text-lg sm:hidden'>
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
    );
};

export default CartCard;