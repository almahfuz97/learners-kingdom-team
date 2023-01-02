import React from 'react'
import DashboardLayout from '../../layout/DashboardLayout'
import { getOrders } from '../api/util/getDataFromDB'

export default function Orders({ orders }) {
    console.log(orders)
    return (
        <div className=' min-h-screen mx-8'>
            <div className="container p-2 mx-auto sm:p-4 ">
                <h2 className="mb-4 text-2xl font-semibold ">Orders</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">

                        <thead className="">
                            <tr className="text-left">
                                <th className="p-3">Transaction ID</th>
                                <th className="p-3">Total Books</th>
                                <th className="p-3">Issued</th>
                                <th className="p-3 text-right">Amount</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map(order => {
                                    return (
                                        <tr key={order._id} className="border-b  border-opacity-20 ">
                                            <td className="p-3">
                                                <p>{order.transactionId}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{order.books.length}</p>
                                            </td>
                                            <td className="p-3">
                                                {
                                                    new Date(order.paidAt).toUTCString()
                                                }
                                            </td>

                                            <td className="p-3 text-right">
                                                <p>${order.totalPrice}</p>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

Orders.PageLayout = DashboardLayout

export async function getServerSideProps(params) {

    const orders = await getOrders(params.query.email);
    console.log(params.query)
    return {
        props: {
            orders: JSON.parse(JSON.stringify(orders))
        }
    }
}