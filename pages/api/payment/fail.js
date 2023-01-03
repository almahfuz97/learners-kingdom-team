import clientPromise from "../util/mongodb";

export default async function handler(req, res) {

    if (req.method === 'POST') {
        console.log(req.query);
        const transactionId = req.query.transactionId
        const client = await clientPromise;
        const db = client.db("learners-kingdom");
        const result = await db.collection('orders').deleteOne({ transactionId: transactionId })

        if (result.deletedCount > 0) {

            res.redirect(`/payment/fail`)
        }
        else {
            res.redirect(`/payment/fail`)
        }
    }

    // res.json({ query: req.query })
}