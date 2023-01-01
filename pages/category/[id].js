import { ObjectId } from 'bson';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../components/Loader/Loading';
import SearchInput from '../../components/SearchInput/SearchInput';
import SimilarBooksCard from '../../components/SimilarBooksCard/SimilarBooksCard';
import { getCategories, getCategoryWiseBooks, getSingleCategory } from '../api/util/getDataFromDB';


const Category = ({ books, categories, loadingData, singleCategory }) => {
    const [loading, setLoading] = useState(true);

    console.log(books, singleCategory)
    useEffect(() => {
        setLoading(false)
    }, [loadingData])

    return (
        <section className="container max-w-screen-xl mx-auto mt-6">
            <div className=' flex justify-center mb-8'>
                <SearchInput books={books}>
                </SearchInput>
            </div>
            <div className='text-center text-xl my-6'>
                <h1><span className='text-primary_color font-bold'>{books.length}</span> Books found in <span className='text-primary_color font-bold'>{singleCategory.category_name}</span> Category</h1>
            </div>
            <div className="flex gap-4">
                <aside className="border border-primary_color min-w-[240px] flex flex-col gap-2 p-4 rounded-lg sticky top-0 bg-primary_color/20 font-bold">
                    <div className="sticky top-4">
                        <Link href='/category'><p className="font-bold text-2xl text-black mb-2">All Categories</p></Link>
                        {
                            categories?.map((category, i) => <Link className=' cursor-pointer' onClick={() => setLoading(true)} href={`${category._id}`} key={i}><p className={singleCategory.category_name == category.category_name ? `text-[#8bd11b]` : `text-gray-600`}>{category.category_name}</p></Link>)
                        }
                    </div>
                </aside>
                <main className="border border-primary_color flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 rounded-lg">
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

    const id = params.id
    const books = await getCategoryWiseBooks(id);
    const categories = await getCategories();
    const singleCategory = await getSingleCategory(id);

    return {
        props: {
            books: JSON.parse(JSON.stringify(books)),
            categories: JSON.parse(JSON.stringify(categories)),
            singleCategory: JSON.parse(JSON.stringify(singleCategory)),
            loadingData: Math.random(),
        },
    }
}

// const data = async () => {
//     const id = params.id
//     const client = await clientPromise;
//     const db = client.db("learners-kingdom");
//     const books = await db.collection('books').find({ categoryID: id }).toArray();
//     const categoryName = await db.collection('booksCategory').findOne({ _id: ObjectId(id) });
//     const { props: { categories } } = await getCategory();

//     console.log(categories)

//     return {
//         props: {
//             books: JSON.parse(JSON.stringify(books)),
//             categoryName: JSON.parse(JSON.stringify(categoryName)),
//             categories,
//             loadingData: Math.random(),
//         },

//     }
// }

// return data();
// }

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
//     const categories = await getCategories();

//     return {
//         props: { categories: JSON.parse(JSON.stringify(categories)) },
//         fallback: false
//     }
// }



export default Category;