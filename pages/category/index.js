import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../components/Loader/Loading";
import SimilarBooksCard from "../../components/SimilarBooksCard/SimilarBooksCard";
import { getBooks, getCategories } from "../api/util/getDataFromDB";

const Category = ({ categories, books }) => {
    const router = useRouter();
    const [searchedBook, setSearchedBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchText = router.query.searchText;
    useEffect(() => {
        if (searchText) {
            const result = books.filter(book => book.bookName.toLowerCase().includes(searchText.toLowerCase()) || book.authorName.toLowerCase().includes(searchText.toLowerCase()));
            setSearchedBook(result);
        }
    }, [searchText])
    // console.log(searchedBook)

    return (
        <section className="container max-w-screen-xl mx-auto">
            <div className='text-center text-xl my-6'>
                {
                    searchText ?
                        <h1><span className='text-primary_color font-bold'>{searchedBook.length}</span> Books found with <span className='text-primary_color font-bold'>{searchText}</span> keyword</h1>
                        :
                        <h1><span className='text-primary_color font-bold'>{books.length}</span> Books found in <span className='text-primary_color font-bold'>All Categories</span></h1>
                }
            </div>
            <div className="flex gap-4">
                <aside className="border border-primary_color min-w-[240px] flex flex-col gap-2 p-4 rounded-lg bg-primary_color/20 font-bold">
                    <div className="sticky top-4">
                        <Link href='/category'><p className="font-bold text-2xl text-[#8bd11b] mb-2">All Categories</p></Link>
                        {
                            categories?.map((category, i) => <Link className=' cursor-pointer' onClick={() => setLoading(true)} href={`category/${category._id}`} key={i}><p>{category.category_name}</p></Link>)
                        }
                    </div>
                </aside>
                <main className="border border-primary_color flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 rounded-lg">
                    {
                        searchText ?
                            <>
                                {
                                    searchedBook?.length === 0 && <p>No results found!</p>
                                }
                                {
                                    loading ? <div className='flex justify-center'><Loading></Loading></div> :
                                        searchedBook?.map(book => <SimilarBooksCard key={book._id} book={book}></SimilarBooksCard>)
                                }
                            </>
                            :
                            <>
                                {
                                    loading ? <div className='flex justify-center'><Loading></Loading></div> :
                                        books.map(book => <SimilarBooksCard key={book._id} book={book}></SimilarBooksCard>)
                                }
                            </>
                    }
                </main>
            </div>
        </section>
    );
};


export async function getServerSideProps() {
    const categories = await getCategories();
    const books = await getBooks();
    return {
        props: {
            categories: JSON.parse(JSON.stringify(categories)),
            books: JSON.parse(JSON.stringify(books))
        }
    }
}

export default Category;