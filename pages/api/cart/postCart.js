import clientPromise from "../util/mongodb";

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const client = await clientPromise;
        const db = client.db('learners-kingdom');

        if (req.body) {
            const cart = req.body;
            const filter = { userEmail: cart.userEmail };
            const options = { upsert: true };
            const updateCart = {
                $set: {
                    cart: cart.cart
                }
            }
            const result = await db.collection('cart').updateOne(filter, updateCart, options);
            res.status(200).json({ success: true, result });
        }
    }
}