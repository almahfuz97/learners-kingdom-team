import clientPromise from "../util/mongodb";
const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const authHeaders = req.headers.authorization;
        if (!authHeaders) {
            return res.status(403).json({ success: false, message: 'forbidden' })
        }

        const token = authHeaders.split(' ')[1];

        if (token) {
            jwt.verify(token, process.env.JWT_KEY, async function (err, decoded) {
                const client = await clientPromise;
                const db = client.db('learners-kingdom');
                const query = { userEmail: decoded };
                const result = await db.collection('cart').findOne(query);
                res.status(200).json({ success: true, result });
            });
        }
        else {
            return res.status(403).json({ success: false, message: 'forbidden' })
        }
    }
    else {
        res.json({ success: false })
    }
}