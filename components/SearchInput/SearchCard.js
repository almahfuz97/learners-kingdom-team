import { useRouter } from 'next/router'
import React from 'react'

export default function SearchCard({ book }) {
    const router = useRouter();
    const handleClick = (bookId, catergoryId) => {
        router.push(`/book/${bookId},${catergoryId}`)
    }
    return (

        <div onClick={() => handleClick(book._id, book.categoryID)} className="p-2 border-b-2 py-3 cursor-pointer">

            <div className="flex space-x-2 ">
                <img src={book.picture} alt="" className="  w-12 h-12 border  " />
                <div className="flex flex-col">
                    <h4 className="text-xs font-semibold text-start mb-px md:text-left">{book.bookName}</h4>
                    <p className=' text-xs opacity-50'>{book.authorName}</p>
                </div>
            </div>

        </div>
    )
}
