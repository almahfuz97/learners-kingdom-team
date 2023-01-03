import clientPromise from "../util/mongodb";

export default async function handler(req, res) {

    console.log(req.query);
    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const result = await db.collection('orders').updateOne({ transactionId: req.query.transactionId }, {
        $set: {
            paid: true,
            paidAt: Date.now()
        }
    });

    if (result.modifiedCount > 0) {

        res.redirect(`/payment/success?transactionId=${req.query.transactionId}&price=${req.query.price}`)
    }
    else {
        res.redirect(`/payment/fail`)
    }

    // res.json({ query: req.query })
}