import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children, useContext } from 'react'
import Loading from '../components/Loader/Loading';
import { AuthContext } from '../context/AuthProvider';
import { BsBook, BsFillCartCheckFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
export default function DashboardLayout({ children }) {

    const { loading, user, logout } = useContext(AuthContext);
    const router = useRouter();
    console.log(children)

    console.log(router)
    if (loading) return <div><Loading></Loading></div>

    if (!user?.email) return <div className='h-screen'><div className=" text-center mt-6 font-bold uppercase ">You are not logged in. Please <Link href={'/login'} className='  underline text-green-400'>Login</Link></div></div>

    return (

        <div className='flex gap-6  relative'>
            <style jsx>
                {
                    `
                    .width1 {
                        width: 400px;
                    }
                    .width2 {
                        width: 100%;
                    }
                    .bottombar {
                        overflow: hidden;
                        background-color: #7E62C1;
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                      }
                    `
                }
            </style>
            <div className={`bottombar p-4 md:hidden bg-primary_color z-10`}>
                <div className=' flex justify-between bg-primary_color'>
                    <Link href={'/dashboard/purchased'}>
                        {
                            router.asPath === `/dashboard/purchased`
                                ? <BsBook fontSize={24} color={'#00FF00'}></BsBook>
                                : <BsBook fontSize={24} color={'#ffffff'}></BsBook>


                        }
                    </Link>

                    <Link href={`/dashboard/orders?email=${user?.email}`}>
                        {
                            router.asPath === `/dashboard/orders?email=${user?.email}` ? <BsFillCartCheckFill fontSize={24} color={'#00FF00'}>
                            </BsFillCartCheckFill> : <BsFillCartCheckFill fontSize={24} color={'#ffffff'}>
                            </BsFillCartCheckFill>
                        }

                    </Link>
                    <Link href={'/dashboard/profile'} className='cursor-pointer'>
                        {
                            router.asPath === '/dashboard/profile' ? <CgProfile fontSize={24} color={'#00FF00'}></CgProfile> : <CgProfile fontSize={24} color={'#ffffff'}></CgProfile>
                        }

                    </Link>

                </div>
            </div>
            <div className='width1  bg-secondary_color/0 border-r-2 shadow'>

                <div className="h-full p-3 space-y-2 w-60">{/* <Link href={'/dashboard/profile'} className={`gap-2 flex px-8 py-4 items-center ${router.asPath === '/dashboard/profile' && 'bg-primary_color text-white'}`}>
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
                </Link> */}
                    <div className="flex items-center p-2 space-x-4">
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`} alt="" className="w-12 h-12 rounded-full bg-primary_color" />
                        <div>
                            <h2 className="text-lg font-semibold">{user?.name}</h2>
                            <span className="flex items-center space-x-1">
                                <Link hre rel="noopener noreferrer" href="/dashboard/profile" className="text-xs hover:underline dark:text-gray-400">
                                    View profile
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-700">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">

                            <li>
                                <Link rel="noopener noreferrer" href="/dashboard/purchased" className={`flex items-center p-2 space-x-3 rounded-md ${router.asPath === '/dashboard/purchased' && 'bg-primary_color text-white'}`}>
                                    <BsBook fontSize={16}></BsBook>
                                    <span className=' ml-2'>Books</span>
                                </Link>
                            </li>


                            <li>
                                <Link rel="noopener noreferrer" href={`/dashboard/orders?email=${user?.email}`} className={`flex items-center p-2 space-x-3 rounded-md ${router.asPath === `/dashboard/orders?email=${user?.email}` && 'bg-primary_color text-white'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                                        <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                                        <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                                    </svg>
                                    <span className=' ml-2'>Orders</span>
                                </Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                    </svg>
                                    <span className='ml-2'>Wishlist</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm">
                            <li>
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                                        <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                                    </svg>
                                    <span className='ml-2'>Settings</span>
                                </Link>
                            </li>
                            <li>
                                <div onClick={() => logout()} className="flex cursor-pointer items-center p-2 space-x-3 rounded-md hover:text-primary_color">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                        <rect width="32" height="64" x="256" y="232"></rect>
                                    </svg>
                                    <span className='ml-2'>Logout</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' width2 '>
                {children}
            </div>
        </div>
    )
}
