import Link from 'next/link'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import ReadAllPages from '../Modals/ReadAllPages/ReadAllPages'

export default function OrderedBookCard({ book }) {
    const [modalToggle, setModalToggle] = useState(false)

    const handleClick = e => {
        console.log(e.target.id)
        if (e.target.id === 'modal-container') {
            setModalToggle(false)
        }
    }
    return (
        <div className="p-4 rounded-md shadow-md shadow-primary_color/40 group">
            <div id='modal-container' onClick={handleClick} className={`z-10 opacity-95  left-0 top-0 w-full h-full overflow-auto bg-stone-700 ${modalToggle ? 'fixed' : 'hidden'}`}>
                <ReadAllPages setModalToggle={setModalToggle} book={book} />
            </div>
            <div id="image" className="overflow-hidden rounded-md">
                <img src={book.picture} className="object-cover object-center w-full rounded-md h-80 group-hover:scale-105 duration-300" />
            </div>
            <div id="information" className="flex items-center justify-between mt-4 gap-2">
                <div>
                    <h1 className="text-xl font-bold text-primary_color">
                        {book.bookName}
                    </h1>
                    <p className="text-lg font-medium text-secondary_color">
                        {book.authorName}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-amber-500">
                    <div className="relative font-medium">
                        <FaStar className="text-5xl"></FaStar>
                        <p className="absolute text-sm pt-0.5 text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{(book.rating).toFixed(1)}</p>
                    </div>
                </div>
            </div>
            <div id="description">
                <p className="text-base my-2 opacity-50 break-all">
                    {book.description.slice(0, 100)}
                </p>
            </div>
            <div onClick={() => setModalToggle(prev => !prev)} id="actions" className="mt-4 flex text-white text-center font-medium gap-4">
                <div className="flex-1 bg-secondary_color hover:bg-secondary_color/80 px-3 py-2 rounded-md "><button>
                    Read
                </button>
                </div>
            </div>
        </div>
    )
}
