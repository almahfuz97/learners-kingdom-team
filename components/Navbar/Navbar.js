import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { CartContext } from "../../context/CartProvider";
import Loading from '../Loader/Loading';
import { GiShoppingCart } from 'react-icons/gi'

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [avatarHover, setAvatarHover] = useState(false);
    const { user, logout, loading } = useContext(AuthContext);
    const { cart } = useContext(CartContext);

    const handleToggle = () => {
        setToggle(prev => !prev);
    }
    return (
        <div>
            <nav className='flex items-center justify-between p-8  bg-slate-700 text-white  border-t-0 border-primary_color relative'>
                <div>
                    <h1><span className='text-xl  md:text-2xl text-primary_color font-bold uppercase'>Learner's</span> <span className='text-xl md:text-2xl text-secondary_color font-bold uppercase'>Kingdom</span></h1>
                </div>
                <div>
                    <ul className='hidden md:flex gap-4 items-center'>
                        <Link className=' hover:text-secondary_color' href="/"><li>Home</li></Link>
                        <Link className=' hover:text-secondary_color' href="/category"><li>Category</li></Link>
                        <Link className=' hover:text-secondary_color' href="/about"><li>About</li></Link>
                        {
                            loading ? <Loading></Loading>
                                : user?._id ?
                                    <>
                                        <Link className='hover:text-primary_color' href='/dashboard/profile' > <li>Dashboard</li></Link>

                                        <Link className='hover:text-secondary_color' href='/cart'><li className="relative"> <GiShoppingCart className=' font-bold text-red-100' fontSize={24} fontStyle={900} /><span className="w-4 h-4 flex justify-center items-center absolute -top-1 -right-2 bg-green-600 text-white rounded-full text-xs font-bold">{cart?.length}</span></li></Link>

                                        <div onMouseLeave={() => setAvatarHover(false)} onMouseOver={() => setAvatarHover(true)} className='relative'>
                                            {/* <li>{user.name}</li> */}
                                            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`} alt="" className=' rounded-full w-8 h-8 cursor-pointer bg-white ml-1' />
                                            <div className={`${avatarHover ? 'block' : 'hidden'} bg-primary_color p-4 z-10 space-y-2 absolute right-0 rounded-lg shadow`}>
                                                <li>{user?.name}</li>
                                                <li className=' hover:text-secondary_color cursor-pointer' onClick={() => logout()}>Logout</li>
                                            </div>
                                        </div>

                                    </>
                                    : <Link className=' hover:text-secondary_color' href="/login"><li>Login</li></Link>

                        }
                    </ul>
                    <div className='block md:hidden hover:cursor-pointer' onClick={handleToggle} >
                        <div className={` h-1 w-6 mb-1  bg-primary_color ${toggle ? ' origin-right rotate-45 translate-x-2 translate-y-2' : 'rotate-0'}`}></div>
                        <div className={` h-1 w-6 mb-1  bg-primary_color ${toggle ? ' origin-left -rotate-45' : 'rotate-0'}`}></div>
                        <div className={` h-1 w-6 mb-1  bg-primary_color ${toggle ? '  invisible ' : 'rotate-0'}`}></div>

                    </div>

                    <div className={`absolute bg-secondary_color md:hidden mt-3 z-50 p-8 uppercase font-bold ${toggle ? ' right-0 top-20  h-screen  duration-500' : 'duration-500 -top-96  right-0'}`}>
                        <ul className=' flex flex-col gap-4'>
                            <Link className=' hover:text-primary_color' href="#"><li>Home</li></Link>
                            <Link className=' hover:text-primary_color' href="/about"><li>About Us</li></Link>
                            {
                                loading ? <Loading></Loading>
                                    : user?._id ?
                                        <>
                                            <Link className='hover:text-primary_color' href='/profile' > <li>Dashboard</li></Link>

                                            <Link className='hover:text-primary_color' href='/cart'>
                                                <li className="relative inline-block">
                                                    <img className='w-6' src="/cart.svg" alt="" />
                                                    <span className="w-4 h-4 flex justify-center items-center absolute -top-1 -right-2 bg-green-600 text-white rounded-full text-xs font-bold">{cart?.length}</span>
                                                </li>
                                            </Link>

                                            <li>{user?.name}</li>
                                            <li className=' hover:text-slate-700 cursor-pointer' onClick={() => logout()}>Logout</li>



                                        </>
                                        : <Link className=' hover:text-primary_color' href="/login"><li>Login</li></Link>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
