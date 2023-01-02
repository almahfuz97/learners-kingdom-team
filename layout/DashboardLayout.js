import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children, useContext } from 'react'
import Loading from '../components/Loader/Loading';
import { AuthContext } from '../context/AuthProvider';

export default function DashboardLayout({ children }) {

    const { loading, user } = useContext(AuthContext);
    const router = useRouter();

    console.log(router)
    if (loading) return <div><Loading></Loading></div>

    if (!user?.email) return <div className='h-screen'><div className=" text-center mt-6 font-bold uppercase ">You are not logged in. Please <Link href={'/login'} className='  underline text-green-400'>Login</Link></div></div>

    return (
        <div className=' grid grid-cols-12  '>
            <div className=' col-span-3 bg-secondary_color/0 border-r-2'>
                <Link href={'/dashboard/profile'} className={`gap-2 flex px-8 py-4 items-center ${router.asPath === '/dashboard/profile' && 'bg-primary_color text-white'}`}>
                    <img src="/avatar.png" alt="" />
                    <h3>{user?.name}</h3>
                </Link>
                <Link href={'/dashboard/purchased'} className={`border-t-2 px-8 flex gap-2 items-center py-4 cursor-pointer ${router.asPath === '/dashboard/purchased' && 'bg-primary_color text-white'}`} >
                    <img src="/book.png" alt="" className='border w-8 h-8 shadow-lg rounded-lg p-px' />
                    <h3 className=' font-bold uppercase'>Your Books</h3>
                </Link>
                <Link href={'/dashboard/profile'} className={`border-t-2 px-8 flex gap-2 items-center py-4 cursor-pointer ${router.asPath === '/dashboard/profile' && 'bg-primary_color text-white'}`}>
                    <img src="/book.png" alt="" className='border w-8 h-8 shadow-lg rounded-lg p-px' />
                    <h3 className=' font-bold uppercase'>Purchased Books</h3>
                </Link>
                <div className='border-t-2 px-8 flex gap-2 items-center py-4 cursor-pointer' >
                    <img src="/book.png" alt="" className='border w-8 h-8 shadow-lg rounded-lg p-px' />
                    <h3 className=' font-bold uppercase'>Purchased Books</h3>
                </div>
            </div>
            <div className=' col-span-9'>
                {children}
            </div>
        </div>
    )
}
