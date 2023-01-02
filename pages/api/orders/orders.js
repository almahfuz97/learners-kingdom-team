// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ObjectId } from "mongodb";
import clientPromise from "../util/mongodb";

export default async function handler(req, res) {

    if (req.method = 'GET') {
        const client = await clientPromise;
        const db = client.db("learners-kingdom");
        const email = req.query.email;
        const result = await db.collection('orders').find({ cus_email: email, paid: true }).toArray();

        let books = [];
        if (result) {
            for (let i = 0; i < result.length; i++) {

                console.log(result[i].books);
                for (let j = 0; j < result[i].books.length; j++) {

                    console.log(result[i].books[j])

                    const result2 = await db.collection('books').findOne({ _id: ObjectId(result[i].books[j].bookId) });
                    console.log(result2)
                    books.push(result2);
                }
            }
        }
        console.log(books);
        res.status(200).json({ books })
    }


}
