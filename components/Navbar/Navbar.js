import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prev => !prev);
    }
    return (
        <div>
            <nav className='  flex items-center justify-between p-8 border border-t-0 border-primary_color relative'>
                <div>
                    <h1><span className='text-xl  md:text-2xl text-primary_color font-bold uppercase'>Learner's</span> <span className='text-xl md:text-2xl text-secondary_color font-bold uppercase'>Kingdom</span></h1>
                </div>
                <div>
                    <ul className='hidden md:flex gap-4'>
                        <Link className=' hover:text-primary_color' href="#"><li>Home</li></Link>
                        <Link className=' hover:text-primary_color' href="#"><li>About Us</li></Link>
                        <Link className=' hover:text-primary_color' href="#"><li>Sign Up</li></Link>
                    </ul>
                    <div className='block md:hidden hover:cursor-pointer' onClick={handleToggle} >
                        <div className={` h-1 w-6 mb-1  bg-primary_color ${toggle ? ' origin-center rotate-45' : 'rotate-0'}`}></div>
                        <div className={` h-1 w-6 mb-1  bg-primary_color ${toggle ? 'invisible rotate-45' : 'rotate-0'}`}></div>
                        <div className={` h-1 w-6 mb-1  bg-primary_color ${toggle ? ' origin-center -rotate-45' : 'rotate-0'}`}></div>

                    </div>

                    <div className={`absolute md:hidden mt-8 h-screen z-10 p-8 uppercase font-bold text-neutral ${toggle ? ' right-0  bg-secondary_color duration-100' : 'duration-100 invisible right-0'}`}>
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
