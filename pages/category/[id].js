import { ObjectId } from 'bson';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loader/Loading';
import SimilarBooksCard from '../../components/SimilarBooksCard/SimilarBooksCard';
import getCategory from '../../util/getCategory';
import clientPromise from '../../util/mongodb';


const Category = ({ books, categoryName, categories, loadingData }) => {
    const [loading, setLoading] = useState(true);
    console.log(loadingData)
    console.log(loading)
    useEffect(() => {
        setLoading(false)
        console.log(loadingData, 'useeffect')
    }, [loadingData])

    return (
        <section className="container max-w-screen-xl mx-auto mt-6">
            <div className='text-center text-xl my-6'>
                <h1><span className='text-primary_color font-bold'>{books.length}</span> Books found in <span className='text-primary_color font-bold'>{categoryName.category_name}</span> Category</h1>
            </div>
            <div className="flex gap-4">
                <aside className="border border-primary_color min-w-[240px] flex flex-col gap-2 p-4 rounded-lg sticky top-0 bg-primary_color/20 font-bold">
                    <p className="font-bold text-2xl text-black mb-2">Categories</p>
                    {
                        categories.map((category, i) => <Link onClick={() => setLoading(true)} href={`${category._id}`} key={i}><p className={categoryName.category_name == category.category_name ? `text-[#8bd11b]` : `text-gray-600`}>{category.category_name}</p></Link>)
                    }
                </aside>
                <main className="border border-primary_color flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {
                        loading ? <div className='flex justify-center'><Loading></Loading></div> :
                            books.map(book => <SimilarBooksCard key={book._id} book={book}></SimilarBooksCard>)
                    }
                </main>
            </div>
        </section>
    );
};

export async function getServerSideProps({ params }) {

    const data = async () => {
        const id = params.id
        const client = await clientPromise;
        const db = client.db("learners-kingdom");
        const books = await db.collection('books').find({ categoryID: id }).toArray();
        const categoryName = await db.collection('booksCategory').findOne({ _id: ObjectId(id) });
        const { props: { categories } } = await getCategory();

        console.log(categories)

        return {
            props: {
                books: JSON.parse(JSON.stringify(books)),
                categoryName: JSON.parse(JSON.stringify(categoryName)),
                categories,
                loadingData: Math.random(),
            },

        }
    }

    return data();
}

// // export const getStaticProps = async ({ params }) => {
// //     const res = await fetch(`http://localhost:3000/api/books/${params.bookID}`)
// //     const data = await res.json();

// //     return {
// //         props: {
// //             book: data
// //         }
// //     }
// // }

// export const getStaticPaths = async () => {
//     const categories = async (req, res) => {
//         const client = await clientPromise;
//         const db = client.db("learners-kingdom");
//         const query = {}
//         const categories = await db.collection('booksCategory').find(query).toArray();

//         return {
//             props: { categories: JSON.parse(JSON.stringify(categories)) },
//         }
//     }


//     return {
//         categories,
//         fallback: false
//     }
// }

export default Category;