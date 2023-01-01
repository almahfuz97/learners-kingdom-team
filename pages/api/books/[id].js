import { ObjectId } from "bson";
import clientPromise from "../util/mongodb";

export default async function handler(req, res) {

    const id = req.query
    const client = await clientPromise;
    const db = await client.db("learners-kingdom");
    const result = await db.collection('books').findOne({ _id: ObjectId(id) });
    if (result) {
        res.status(200).json(result)
    }
}