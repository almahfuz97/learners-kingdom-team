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
export async function getRecentlyAddedBooks() {
    const client = await clientPromise;
    const db = await client.db("learners-kingdom");
    const query = {}
    const result = await db.collection('books').find(query).sort({ published: -1 }).limit(6).toArray();
    return result
}
export async function getMostRatedBooks() {
    const client = await clientPromise;
    const db = await client.db("learners-kingdom");
    const query = {}
    const result = await db.collection('books').find(query).sort({ rating: -1 }).limit(4).toArray();
    return result
}
export async function getMostSoldBooks() {
    const client = await clientPromise;
    const db = await client.db("learners-kingdom");
    const query = {}
    const result = await db.collection('books').find(query).sort({ totalSold: -1 }).limit(4).toArray();
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
export async function getReviews(id) {
    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const result = await db.collection('reviews').find().sort({ createdAt: -1 }).toArray();
    // const categoryName = await db.collection('booksCategory').findOne({ _id: ObjectId(id) });
    return result
}

export async function getBooksReviews() {
    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const query = {}
    const result = await db.collection('booksReviews').find().sort({ createdAt: -1 }).toArray();
    return result
}
export async function getSpecificBookReviews(id) {
    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const query = { bookID: id }
    const result = await db.collection('booksReviews').find(query).sort({ createdAt: -1 }).toArray();
    return result
}
// export async function getOrders(id) {
//     const client = await clientPromise;
//     const db = client.db("learners-kingdom");
//     const query = { bookID: id }
//     const result = await db.collection('booksReviews').find(query).sort({ createdAt: -1 }).toArray();
//     return result
// }

export default async function handler(req, res) {

    const result = await getCategories();
    res.json(result)
    console.log(result);

}
