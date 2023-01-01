import React from 'react'

export default function ReadFewPages({ setModalToggle }) {
    return (
        <div className="relative mx-auto w-1/2 max-h-[400px] overflow-auto mt-20 opacity-100 bg-slate-500 text-white  p-6 rounded-md  sm:py-8 sm:px-12 shadow-lg">
            <button onClick={() => setModalToggle(prev => !prev)} className="absolute top-2 right-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                    <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                </svg>
            </button>

            <h2 className="text-2xl mb-2 text-start font-semibold leading-tight tracking-wide">Quis vel eros donec ac odio tempor.</h2>
            <p className=" text-start">Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta maiores non itaque aliquam sint. </p>

        </div>
    )
}
