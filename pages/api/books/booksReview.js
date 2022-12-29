import clientPromise from "../util/mongodb";


export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("learners-kingdom");

    if (req.method === 'GET') {
        console.log(req.query)
        const query = { bookID: req.query.bookID }
        const result = await db.collection('booksReviews').find(query).sort({ createdAt: -1 }).toArray();
        console.log(result)
        res.json(result)
    }
    else if (req.method === 'POST') {
        const body = req.body;
        console.log(body)
        const query = {};
        const result = await db.collection('booksReviews').insertOne(body);
        res.json(result);
    }


}