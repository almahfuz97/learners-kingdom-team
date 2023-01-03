import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";
import Loading from "../../components/Loader/Loading";
import SearchInput from "../../components/SearchInput/SearchInput";
import SimilarBooksCard from "../../components/SimilarBooksCard/SimilarBooksCard";
import { getBooks, getCategories } from "../api/util/getDataFromDB";

const Category = ({ categories, books }) => {
    const router = useRouter();
    const [searchedBook, setSearchedBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchText = router.query.searchText;
    const [filterToggle, setFilterToggle] = useState(false);

    useEffect(() => {
        if (searchText) {
            const result = books.filter(book => book.bookName.toLowerCase().includes(searchText.toLowerCase()) || book.authorName.toLowerCase().includes(searchText.toLowerCase()));
            setSearchedBook(result);
        }
    }, [searchText])

    return (
        <section className="max-w-screen-xl mx-4 xl:mx-auto relative">
            {
                filterToggle ?
                    <CategorySidebar filterToggle={filterToggle} setFilterToggle={setFilterToggle}>
                        <Link href='/category'><p className="font-bold text-2xl text-primary_color mb-4">All Categories</p></Link>
                        <div className="flex flex-col gap-2 border-t-2 border-primary_color pt-4 divide-y-2 font-medium text-gray-600">
                            {
                                categories?.map(category => <p key={category._id} className="pt-2"><Link onClick={() => setLoading(true)} href={`/category/${category._id}`} className="hover:text-rose-500">{category.category_name}</Link></p>)
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
                {
                    searchText ?
                        <h1><span className='text-primary_color font-bold'>{searchedBook.length}</span> Books found with <span className='text-primary_color font-bold'>{searchText}</span> keyword</h1>
                        :
                        <h1><span className='text-primary_color font-bold'>{books.length}</span> Books found in <span className='text-primary_color font-bold'>All Categories</span></h1>
                }
            </div>
            <div className="flex">
                <aside className="hidden lg:flex border-2 border-primary_color/30 min-w-[280px] flex-col gap-2 p-4 px-8 rounded-md">
                    <div className="sticky top-4">
                        <Link href='/category'><p className="font-bold text-2xl text-primary_color mb-4">All Categories</p></Link>
                        <div className="flex flex-col gap-2 border-t-2 border-primary_color pt-4 divide-y-2 font-medium text-gray-600">
                            {
                                categories?.map(category => <p key={category._id} className="pt-2"><Link onClick={() => setLoading(true)} href={`/category/${category._id}`} className="hover:text-rose-500">{category.category_name}</Link></p>)
                            }
                        </div>
                    </div>
                </aside>
                <main className="flex-1 lg:pl-8 xl:pl-10">
                    <div className="lg:hidden flex justify-between items-center pt-1 pb-2 border-b-2 mb-8 lg:border-0 lg:mb-0">
                        <div><button onClick={() => setFilterToggle((prev) => !prev)} className="flex items-center font-medium gap-2 text-primary_color"><FaFilter></FaFilter> Filter</button></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
                        {
                            searchText ?
                                <>
                                    {
                                        searchedBook?.length === 0 && <p className="text-xl font-medium text-rose-600">No results found!</p>
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
                    </div>
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