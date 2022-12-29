import clientPromise from "../util/mongodb";

export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("learners-kingdom");

    if (req.method === 'GET') {

    }
    else if (req.method === 'POST') {
        const body = req.body;
        console.log(body)
        const query = {};
        const result = await db.collection('booksReviews').insertOne(body);
        res.json(result);
    }


}