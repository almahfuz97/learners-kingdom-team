import React, { useContext } from 'react';
import Loading from '../Loader/Loading';
import { AuthContext } from '/context/AuthProvider';
const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    if (loading) return <div><Loading /></div>
    return (
        <div className="font-serif grid grid-cols-6 m-6 mx-12">
            <div className="rounded-lg col-span-2 p-8 bg-slate-800 mx-auto mr-4">
                <img src="/reviewman.png " alt="" className="w-14 h-14 rounded-full object-center mx-auto" />
                <button className=' h-9 w-3/4 rounded-lg m-4 bg-secondary_color'>Activity</button>


                <li className="font-serif p-2 h-12 w-full rounded-lg mt-3 list-none hover:bg-secondary_color font-semibold text-white ">Listed Books : <mark className='text-sm p-1 rounded-lg'>14</mark></li>

    

                <li className="font-serif p-2 h-12 w-full rounded-lg mt-3 list-none hover:bg-secondary_color font-semibold text-white ">Audio Books : <mark className='text-sm p-1 rounded-lg'>17</mark></li>

                <li className="font-serif p-2 h-12 w-full rounded-lg mt-3 list-none hover:bg-secondary_color font-semibold text-white ">Hard Copies : <mark className='text-sm p-1 rounded-lg'>12</mark></li>



            </div>
            <div className=" grid grid-cols-6 col-span-4 bg-slate-800 rounded-lg ml-0 mr-8">
                <div className="profile col-span-6 ">
                    <h1 className='text-2xl font-bold text-white m-3'>My Profile </h1>
                    <hr />
                </div>
                <div className=" colspan-2 ">
                    <img src="/reviewman.png" alt="" className="w-24 h-24 rounded-full m-3" />
                    <button className='p-2 m-3 rounded-lg bg-secondary_color'>Edit Profile</button>
                </div>
                <div className="grid grid-cols-1 col-span-4 mt-10 py-3">
                    <h2 className='text-xl text-white py-3'>User Id</h2>
                    <p className=' text-white py-2'>Full Name</p>
                    <h2 className='text-xl font-serif text-white py-2'>{user?.name}</h2>
                    <p className='text-white py-2'>Email Address</p>
                    <h2 className='text-xl font-serif text-white py-3'>{user?.email}</h2>
                    <p className=' text-white py-2'>Phone</p>
                    <h1 className='text-xl font-serif text-white py-2'>{user?.phone}</h1>
                    <p className=' text-white py-2'>Address</p>
                    <h1 className='text-xl font-serif text-white py-2'>{user?.address}</h1>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;