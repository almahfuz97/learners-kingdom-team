import React, { useContext } from 'react';
import { AuthContext } from '/context/AuthProvider';
const UserProfile = () => {
  const {user} =  useContext(AuthContext);
  console.log(user);
    return (
        <div className="grid grid-cols-6 m-6 mx-12">
            <div className="rounded-lg col-span-2 p-8 bg-primary_color mx-auto mr-4">
                <img src="/reviewman.png " alt="" className="w-14 h-14 rounded-full object-center mx-auto" />
                <button className=' h-9 w-3/4 rounded-lg m-4 bg-secondary_color'>Activity</button>
                
                   
                    <li className="p-2 h-12 w-full rounded-lg mt-3 list-none hover:bg-secondary_color font-semibold text-white ">DOWNLOADED : <mark className='text-sm p-1 rounded-lg'>14</mark></li>
                   
                    <li className="p-2 h-12 w-full rounded-lg mt-3 list-none hover:bg-secondary_color font-semibold text-white ">DOWNLOADED : <mark className='text-sm p-1 rounded-lg'>14</mark></li>
                   
                    <li className="p-2 h-12 w-full rounded-lg mt-3 list-none hover:bg-secondary_color font-semibold text-white ">DOWNLOADED : <mark className='text-sm p-1 rounded-lg'>14</mark></li>
                   
                    <li className="p-2 h-12 w-full rounded-lg mt-3 list-none hover:bg-secondary_color font-semibold text-white ">DOWNLOADED : <mark className='text-sm p-1 rounded-lg'>14</mark></li>
                    
                 

            </div>
            <div className=" grid grid-cols-6 col-span-4 bg-primary_color rounded-lg ml-0 mr-8">
                <div className="profile col-span-6 ">
                <h1 className='text-2xl font-bold text-white m-3 sm:text-center'>My Profile </h1>
                <hr/>
                </div>
                <div className=" colspan-2 ">
                <img src="/reviewman.png" alt="" className="w-24 h-24 rounded-full m-3" />
                <button className='p-2 m-3 rounded-lg bg-secondary_color'>Edit Profile</button>
                </div>
                <div className="grid grid-cols-1 col-span-4 mt-10 py-3">
                    <h2 className='text-xl text-white py-3'>User Id</h2>
                    <p className=' text-white py-2'>Full Name</p>
                    <h2 className='text-xl text-white py-2'>Imtiaz Uddin</h2>
                    <p className='text-white py-2'>Email Address</p>
                    <h2 className='text-xl text-white py-3'>imtiazuddin176@gmail.com</h2>
                    <p className=' text-white py-2'>Phone</p>
                    <h1 className='text-xl text-white py-2'>+8801840930768</h1>
                    <p className=' text-white py-2'>Address</p>
                    <h1 className='text-xl text-white py-2'>Road No: 2, Mithanala, Mirsharai, Chattagram,Bangladesh</h1>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;