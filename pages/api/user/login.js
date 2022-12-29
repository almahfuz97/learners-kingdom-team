// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../util/mongodb";
var CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


export default async function handler(req, res) {

    if (req.method === 'POST') {
        if (req.body) {
            const { email, password } = req.body;

            if (email) {
                const client = await clientPromise;
                const db = client.db("learners-kingdom");
                const query = { email }
                console.log(email)
                const result = await db.collection('users').findOne(query);
                console.log(result)
                if (result) {
                    const bytes = CryptoJS.AES.decrypt(result.encrypted_password, process.env.PASS_SECRET_KEY);
                    var originalPass = bytes.toString(CryptoJS.enc.Utf8);

                    console.log(originalPass, password)

                    if (originalPass === password) {
                        const token = jwt.sign(email, process.env.JWT_KEY);
                        res.status(200).json({ success: true, token: token })
                    }
                    else {
                        return res.json({ success: false, message: 'Invalid credintials' })

                    }
                }
                else {
                    return res.json({ success: false, message: 'User Not found' })

                }

            } else {
                return res.json({ success: false, message: 'Invalid credintials' })

            }
        }
        else {
            return res.json({ success: false, message: 'Invalid credintials' })
        }
    }
    else {

        res.status(400).json({ success: false, error: 'error' })
    }
}
