import React from 'react'

export default function Fail() {
    return (
        <div className=' flex justify-center my-20 mx-8'>
            <div className='shadow-lg rounded-lg p-6 '>
                <div className='  flex flex-col items-center gap-2 justify-center mt-4  mx-auto'>
                    <img src="/cross.png" alt="" className='w-12 h-12' />
                    <h3 className='text-2xl text-red-500 font-bold '>Something went wrong!</h3>

                </div>
                <div className=' w-full my-2 bg-gray-600 h-px '></div>

                <div className='mt-4 flex justify-between'>
                    <p>Please try again!</p>
                </div>

            </div>


        </div>
    )
}
