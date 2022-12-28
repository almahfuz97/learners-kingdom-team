import clientPromise from "../../../util/mongodb";

export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const result = await db.collection('testbook').find({}).toArray();

    if (result) {
        res.status(200).json(result)
    }
}