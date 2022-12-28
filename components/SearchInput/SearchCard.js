import React from 'react'

export default function SearchCard({ book }) {
    return (

        <div className="p-2 border-b-2 py-3">
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
