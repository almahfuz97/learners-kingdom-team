import React from 'react'

export default function BookReviewCard({ review }) {
    return (
        <div className='p-3 rounded-lg border'>
            <div className='flex gap-4'>
                <img src={review.userImg} className='rounded-full w-12 h-12' alt="" />
                <div>
                    <h3 className=' font-bold'>{review.userName}</h3>
                    <p className=' text-xs opacity-60'>{review.reviewContent}</p>
                </div>
            </div>
        </div>
    )
}
