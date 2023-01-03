// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ObjectId } from "mongodb";
import clientPromise from "../util/mongodb";
const SSLCommerzPayment = require('sslcommerz-lts')

export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    // const result = await db.collection('random').insertOne({ abc: 'hello' });

    // console.log(result);
    // res.status(200).json({ success: true })

    if (req.method === 'POST') {
        const is_live = false //true for live, false for sandbox
        let orderedBooks = [];
        const paymentInfo = req.body;
        console.log(paymentInfo);
        const { cart, cus_email, cus_name, cus_phone } = paymentInfo;
        let price = 0;

        for (let i = 0; i < cart.length; i++) {
            const result = await db.collection('books').findOne({ _id: ObjectId(cart[i].bookId) });
            if (result) {
                price = price + result.price;
                orderedBooks.push(result)
            }
        }
        console.log(price);
        // return res.json({ success: paymentInfo });
        const transactionId = new ObjectId().toString();
        const data = {
            total_amount: price,
            currency: 'USD',
            tran_id: transactionId, // use unique tran_id for each api call
            success_url: `/api/payment/success?transactionId=${transactionId}&price=${price}`,
            fail_url: `/api/payment/fail?transactionId=${transactionId}`,
            cancel_url: `/api/payment/cancel`,
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Books',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: cus_name,
            cus_email: cus_email,
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: cus_phone,
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        const sslcz = new SSLCommerzPayment(process.env.Store_ID, process.env.Store_Password, is_live)
        sslcz.init(data).then(async (apiResponse) => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            await db.collection('orders').insertOne({
                books: [...cart],
                totalPrice: price,
                transactionId,
                paid: false,
                cus_email
            })
            res.json({ url: GatewayPageURL })
            console.log('Redirecting to: ', GatewayPageURL)
        });
    }



}
