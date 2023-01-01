import { useRouter } from 'next/router'
import React from 'react'

export default function Success() {
    const router = useRouter();

    return (
        <div className=' flex justify-center my-20 mx-8'>
            <div className='shadow-lg rounded-lg p-6 '>
                <div className='  flex flex-col items-center gap-2 justify-center mt-4  mx-auto'>
                    <img src="/success.png" alt="" className='w-12 h-12' />
                    <h3 className='text-2xl text-green-500 font-bold '>Payment Successfull</h3>
                    <h2 className=' opacity-70 text-gray-500'>Transaction ID : {router.query.transactionId}</h2>
                </div>
                <div className=' w-full my-2 bg-gray-600 h-px '></div>

                <div className='mt-4 flex justify-between'>
                    <p className=' text-gray-500'>Amount Paid:</p>
                    <p>${router.query.price}</p>
                </div>

            </div>


        </div>
    )
}
