import React from 'react'

export default function SearchCard({ book }) {
    return (

        <div className="p-2 ">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className=" flex-shrink-0 w-12 h-12 border  md:justify-self-start " />
                <div className="flex flex-col">
                    <h4 className="text-xs font-semibold text-center md:text-left">{book.bookName}</h4>
                    <p className=' text-xs opacity-50'>{book.authorName}</p>
                </div>
            </div>

        </div>
    )
}
