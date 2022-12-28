import clientPromise from "./mongodb";

const getDataFromDB = async () => {
    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const categories = await db.collection('booksCategory').find({}).toArray();
    const books = await db.collection('books').find({ categoryID: id }).toArray();
    const categoryName = await db.collection('booksCategory').findOne({ _id: ObjectId(id) });
    const mostRated = await db.collection('books').find({}).sort({ rating: -1 }).limit(3);

    // return {
    //     props: { categories: JSON.parse(JSON.stringify(categories)) },
    // }

    // return {
    //     props: {
    //         books: JSON.parse(JSON.stringify(books)),
    //         categoryName: JSON.parse(JSON.stringify(categoryName)),
    //         categories,
    //         loadingData: Math.random(),
    //     },

    // }

    return {
        categories, mostRated
    }
}

export default getDataFromDB;