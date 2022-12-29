import React from 'react'
import BookReviewCard from './BookReviewCard'

export default function BookReveiwsContainer({ bookReviews }) {
    return (
        <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {
                bookReviews?.map(review => <BookReviewCard key={review._id} review={review}></BookReviewCard>)
            }
        </div>
    )
}
