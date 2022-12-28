// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../util/mongodb";

export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("learners-kingdom");
    const query = {}
    const result = await db.collection('booksCategory').find(query).toArray();
    res.json(result)
    console.log(result);

}



// }

// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
// }
