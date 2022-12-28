// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";



export async function getCategories() {
    const client = await clientPromise;
    const db = await client.db("learners-kingdom");
    const query = {}
    const result = await db.collection('booksCategory').find(query).toArray();
    return result
}
export async function getSingleCategory(id) {
    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const result = await db.collection('booksCategory').findOne({ _id: ObjectId(id) });
    return result
}
export async function getBooks() {
    const client = await clientPromise;
    const db = await client.db("learners-kingdom");
    const query = {}
    const result = await db.collection('books').find(query).toArray();
    return result
}
export async function getSingleBook(id) {
    console.log(id)
    const client = await clientPromise;
    const db = await client.db("learners-kingdom");
    const result = await db.collection('books').findOne({ _id: ObjectId(id) });
    return result;
}
export async function getCategoryWiseBooks(id) {
    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const result = await db.collection('books').find({ categoryID: id }).toArray();

    // const categoryName = await db.collection('booksCategory').findOne({ _id: ObjectId(id) });
    return result
}

export default async function handler(req, res) {

    const result = await getCategories();
    res.json(result)
    console.log(result);

}
