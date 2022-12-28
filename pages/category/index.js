import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../components/Loader/Loading";
import SimilarBooksCard from "../../components/SimilarBooksCard/SimilarBooksCard";
import { getBooks, getCategories } from "../api/util/getDataFromDB";

const Category = ({ categories, books }) => {
    const router = useRouter();
    const [searchedBook, setSearchedBook] = useState();
    const [loading, setLoading] = useState(false);
    const searchText = router.query.searchText;
    useEffect(() => {
        const result = books.filter(book => book.bookName.toLowerCase().includes(searchText.toLowerCase()) || book.authorName.toLowerCase().includes(searchText.toLowerCase()));
        if (searchText === '') setSearchedBook(null);
        else {
            setSearchedBook(result);
        }
    }, [])
    // console.log(searchedBook)

    return (
        <section className="container max-w-screen-xl mx-auto">
            <div>

            </div>
            <div className="flex gap-4">
                <aside className="border border-primary_color min-w-[240px] flex flex-col gap-2 p-4 rounded-lg">
                    <p className="font-bold">Categories</p>
                    {
                        categories.map((category, i) => <p key={i}>{category.category_name}</p>)
                    }
                </aside>
                <main className="border border-primary_color flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {
                        loading ? <div className='flex justify-center'><Loading></Loading></div> :
                            searchedBook.map(book => <SimilarBooksCard key={book._id} book={book}></SimilarBooksCard>)
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