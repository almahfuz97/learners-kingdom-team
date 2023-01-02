import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import DashboardLayout from '../../layout/DashboardLayout'

export default function Profile() {
    const { user } = useContext(AuthContext)
    return (

        <div className=' md:min-h-screen mx-8 mt-4 p-4 md:shadow-lg rounded-lg bg-pink-50 flex justify-center '>
            <div>
                <h1 className=' font-bold text-2xl uppercase text-primary_color text-center '>Your Profile</h1>
                <div className='flex flex-col gap-6 '>
                    <div className='md:border mt-4 p-4 min-w-[400px] rounded-lg md:shadow-lg flex flex-col justify-center items-center'>
                        <img src="https://avatars.dicebear.com/v2/avataaars/Abdullah.svg?options[mood][]=happy" alt="" className=' w-28 h-28 bg-primary_color rounded-full mt-8 ml-2' />
                        <button className=' p-3 text-white rounded-lg bg-primary_color mt-4 ml-2'>Edit Profile</button>
                        <div className='mt-8'>
                            <div className=' flex flex-col md:flex-row gap-4 text-slate-900 mb-2'>
                                <p className=' p-4 border shadow-lg rounded-lg'><span>Name:</span> {user?.name}</p>
                                <p className=' p-4 border shadow-lg rounded-lg'><span>Email: {user?.email}</span></p>
                                <p className=' p-4 border shadow-lg rounded-lg'><span>Phone: {user?.phone}</span></p>
                                <p className=' p-4 border shadow-lg rounded-lg'><span>Books: 20 </span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

Profile.PageLayout = DashboardLayout