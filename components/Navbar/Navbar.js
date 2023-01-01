import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { CartContext } from "../../context/CartProvider";
import Loading from '../Loader/Loading';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const { user, logout, loading } = useContext(AuthContext);
    const { fullCart } = useContext(CartContext);
    const { cart } = fullCart

    const handleToggle = () => {
        setToggle(prev => !prev);
    }
    return (
        <div>
            <nav className='  flex items-center justify-between p-8  bg-[#F4F2F3]  border-t-0 border-primary_color relative'>
                <div>
                    <h1><span className='text-xl  md:text-2xl text-primary_color font-bold uppercase'>Learner's</span> <span className='text-xl md:text-2xl text-secondary_color font-bold uppercase'>Kingdom</span></h1>
                </div>
                <div>
                    <ul className='hidden md:flex gap-4'>
                        <Link className=' hover:text-primary_color' href="/"><li>Home</li></Link>
                        <Link className=' hover:text-primary_color' href="/about"><li>About Us</li></Link>
                        {
                            loading ? <Loading></Loading>
                                : user?._id ?
                                    <>
                                        <Link className='hover:text-primary_color' href='/profile' > <li>Dashboard</li></Link>
                                        <li>{user.name}</li>
                                        <Link className='hover:text-primary_color' href='/cart'><li className="relative"><img className='w-6' src="/cart.svg" alt="" /><span className="w-4 h-4 flex justify-center items-center absolute -top-1 -right-2 bg-green-600 text-white rounded-full text-xs font-bold">{cart?.length}</span></li></Link>
                                        <li className=' hover:text-primary_color cursor-pointer' onClick={() => logout()}>Logout</li>
                                    </>
                                    : <Link className=' hover:text-primary_color' href="/login"><li>Login</li></Link>

                        }
                    </ul>
                    <div className='block md:hidden hover:cursor-pointer' onClick={handleToggle} >
                        <div className={` h-1 w-6 mb-1  bg-primary_color ${toggle ? ' origin-right rotate-45 translate-x-2 translate-y-2' : 'rotate-0'}`}></div>
                        <div className={` h-1 w-6 mb-1  bg-primary_color ${toggle ? ' origin-left -rotate-45' : 'rotate-0'}`}></div>
                        <div className={` h-1 w-6 mb-1  bg-primary_color ${toggle ? '  invisible ' : 'rotate-0'}`}></div>

                    </div>

                    <div className={`absolute bg-secondary_color md:hidden mt-3 z-50 p-8 uppercase font-bold text-neutral ${toggle ? ' right-0 top-20  h-screen  duration-500' : 'duration-500 -top-96  right-0'}`}>
                        <ul className=' flex flex-col gap-4'>
                            <Link className=' hover:text-primary_color' href="#"><li>Home</li></Link>
                            <Link className=' hover:text-primary_color' href="/about"><li>About Us</li></Link>
                            <Link className=' hover:text-primary_color' href="/register"><li>Sign Up</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
