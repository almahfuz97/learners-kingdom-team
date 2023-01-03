import React from 'react'
import BookReviewCard from './BookReviewCard'

export default function BookReveiwsContainer({ bookReviews }) {
    return (
        <div className='mt-8 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {
                bookReviews?.map(review => <BookReviewCard key={review._id} review={review}></BookReviewCard>)
            }
        </div>
    )
}
