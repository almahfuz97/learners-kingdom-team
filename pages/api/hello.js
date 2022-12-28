// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  // const client = await clientPromise;
  // const db = client.db("learners-kingdom");
  // const result = await db.collection('random').insertOne({ abc: 'hello' });

  // console.log(result);
  res.status(200).json({ success: true })


}
