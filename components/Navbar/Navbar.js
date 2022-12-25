import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className=' flex justify-between p-8 border border-t-0 border-primary_color relative'>
                <div>
                    <h1><span className=' md:text-2xl text-primary_color font-bold uppercase'>Learner's</span> <span className='md:text-2xl text-secondary_color font-bold uppercase'>Kingdom</span></h1>
                </div>
                <div>
                    <ul className='hidden md:flex gap-4'>
                        <Link className=' hover:text-primary_color' href="#"><li>Home</li></Link>
                        <Link className=' hover:text-primary_color' href="#"><li>About Us</li></Link>
                        <Link className=' hover:text-primary_color' href="#"><li>Sign Up</li></Link>
                    </ul>
                    <div className='block md:hidden' >
                        <div className=' h-1 w-6 mb-1  bg-primary_color'></div>
                        <div className=' h-1 w-6 mb-1  bg-primary_color'></div>
                        <div className=' h-1 w-6 mb-1  bg-primary_color'></div>
                    </div>

                    <div className=' absolute mt-8 h-screen right-0 p-8 uppercase font-bold text-neutral bg-secondary_color'>
                        <ul className=' flex flex-col gap-4'>
                            <Link className=' hover:text-primary_color' href="#"><li>Home</li></Link>
                            <Link className=' hover:text-primary_color' href="#"><li>About Us</li></Link>
                            <Link className=' hover:text-primary_color' href="#"><li>Sign Up</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
