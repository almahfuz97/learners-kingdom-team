// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import clientPromise from "./mongodb";



// export async function getCategories() {
//     const client = await clientPromise;
//     const db = await client.db("learners-kingdom");
//     const query = {}
//     const result = await db.collection('booksCategory').find(query).toArray();
//     return result
// }

// export default async function handler(req, res) {

//     const result = await getCategories();
//     res.json(result)
//     console.log(result);

// }
