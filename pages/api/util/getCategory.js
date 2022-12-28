import clientPromise from "./mongodb";

const getCategory = async () => {
    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const categories = await db.collection('booksCategory').find({}).toArray();
    // const books = await db.collection('books').find({}).toArray();

    return {
        props: { categories: JSON.parse(JSON.stringify(categories)) },
    }
}

export default getCategory;