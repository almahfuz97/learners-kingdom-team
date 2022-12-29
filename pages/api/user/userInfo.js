// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../util/mongodb";
var CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


export default async function handler(req, res) {

    if (req.method === 'GET') {
        const authHeaders = req.headers.authorization;

        console.log(authHeaders)
        if (!authHeaders) return res.status(403).json({ success: false, message: 'forbidden' })

        const token = authHeaders.split(' ')[1];
        if (token) {
            jwt.verify(token, process.env.JWT_KEY, async function (err, decoded) {

                if ((req.query.email === decoded)) {

                    const client = await clientPromise;
                    const db = client.db("learners-kingdom");
                    const query = { email: decoded }
                    const result = await db.collection('users').findOne(query);
                    delete result.encrypted_password;

                    res.status(200).json({ success: true, data: result })

                }
                else {
                    return res.status(403).json({ success: false, message: 'forbidden' })
                }

            })
                ;
        }
        else {
            return res.status(403).json({ success: false, message: 'forbidden' })
        }
    }
}
