import React, { useContext, useEffect, useState } from 'react'
import OrderedBookCard from '../../components/Orders/OrderedBookCard';
import { AuthContext } from '../../context/AuthProvider'
import DashboardLayout from '../../layout/DashboardLayout'

export default function Purchased() {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState();

    console.log(books)
    useEffect(() => {
        fetch(`${process.env.URL}/api/orders/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooks(data.books);
            }).catch(err => console.log(err))

    }, [user?.email])

    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                books?.map(book => <OrderedBookCard book={book} />)
            }
        </div>
    )
}

Purchased.PageLayout = DashboardLayout

// export async function getServerSideProps() {

// }