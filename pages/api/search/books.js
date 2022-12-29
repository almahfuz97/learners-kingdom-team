// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../util/mongodb";


export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("learners-kingdom");

    const searchText = req.query.text;
    console.log(searchText);


    // console.log(result);
    res.status(200).json({ success: true })


}
