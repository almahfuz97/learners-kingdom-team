// import { ObjectId } from 'bson';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import CategorySidebar from '../../components/CategorySidebar/CategorySidebar';
// import { useForm } from 'react-hook-form';
import Loading from '../../components/Loader/Loading';
import SearchInput from '../../components/SearchInput/SearchInput';
import SimilarBooksCard from '../../components/SimilarBooksCard/SimilarBooksCard';
import { getCategories, getCategoryWiseBooks, getSingleCategory } from '../api/util/getDataFromDB';


const Category = ({ books, categories, loadingData, singleCategory }) => {
    const [loading, setLoading] = useState(true);
    const [filterToggle, setFilterToggle] = useState(false);

    useEffect(() => {
        setLoading(false)
    }, [loadingData])

    const closeFilter = () => {
        setLoading(true);
        setFilterToggle((prev) => !prev);
    }

    return (
        <section className="max-w-screen-xl mt-6 mx-4 xl:mx-auto relative">
            {
                filterToggle ?
                    <CategorySidebar filterToggle={filterToggle} setFilterToggle={setFilterToggle}>
                        <Link href='/category'><p className="font-bold text-2xl text-gray-700 mb-4">All Categories</p></Link>
                        <div className="flex flex-col gap-2 border-t-2 border-primary_color pt-4 divide-y-2 font-medium text-gray-600">
                            {
                                categories?.map(category => <p key={category._id} className="pt-2"><Link onClick={() => closeFilter()} href={`/category/${category._id}`} className={`hover:text-rose-500 ${singleCategory.category_name == category.category_name ? "text-rose-500" : "text-gray-600"}`}>{category.category_name}</Link></p>)
                            }
                        </div>
                    </CategorySidebar>
                    :
                    <CategorySidebar filterToggle={filterToggle} setFilterToggle={setFilterToggle}>
                    </CategorySidebar>
            }
            <div className='flex justify-center my-6'>
                <SearchInput books={books}>
                </SearchInput>
            </div>
            <div className='text-center text-xl mb-12'>
                <h1><span className='text-primary_color font-bold'>{books.length}</span> Books found in <span className='text-primary_color font-bold'>{singleCategory.category_name}</span> Category</h1>
            </div>
            <div className="flex">
                <aside className="hidden lg:flex border-2 border-primary_color/30 min-w-[280px] flex-col gap-2 p-4 px-8 rounded-md">
                    <div className="sticky top-4">
                        <Link href='/category'><p className="font-bold text-2xl text-gray-700 mb-4">All Categories</p></Link>
                        <div className="flex flex-col gap-2 border-t-2 border-primary_color pt-4 divide-y-2 font-medium text-gray-600">
                            {
                                categories?.map(category => <p key={category._id} className="pt-2"><Link onClick={() => setLoading(true)} href={`/category/${category._id}`} className={`hover:text-rose-500 ${singleCategory.category_name == category.category_name ? "text-rose-500" : "text-gray-600"}`}>{category.category_name}</Link></p>)
                            }
                        </div>
                    </div>
                </aside>
                <main className="flex-1 lg:pl-8 xl:pl-10">
                    <div className="lg:hidden flex justify-between items-center pt-1 pb-2 border-b-2 mb-8 lg:border-0 lg:mb-0">
                        <div><button onClick={() => setFilterToggle((prev) => !prev)} className="flex items-center font-medium gap-2 text-primary_color"><FaFilter></FaFilter> Filter</button></div>
                    </div>
                    {
                        loading ? <div className='h-[20vh] w-1/2 flex justify-center items-center'><Loading></Loading></div> :
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
                                {
                                    books.map(book => <SimilarBooksCard key={book._id} book={book}></SimilarBooksCard>)
                                }
                            </div>
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