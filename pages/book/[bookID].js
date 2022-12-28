import SimilarBooksCard from "../../components/SimilarBooksCard/SimilarBooksCard";

const BookDetails = ({ book }) => {
    return (
        <section className="container max-w-screen-lg mx-auto mt-10">
            <div className="md:flex gap-6">
                <div className="max-w-xs mx-auto sm:max-w-none p-6 border border-primary_color rounded-lg mb-4 md:mb-0">
                    <img src={book.picture} alt="" className="mx-auto w-full sm:max-w-xs md:max-w-md" />
                </div>
                <div className="p-6 border border-primary_color rounded-lg flex-1">
                    <h1 className="text-3xl font-bold mb-2">{book.name}</h1>
                    <div className="flex gap-12">
                        <p><span className="text-gray-600 font-medium">Author: </span>{book.author}</p>
                        <p><span className="text-gray-600 font-medium">Rating: </span> </p>
                    </div>
                    <h4 className="text-xl font-medium my-4"><span className="text-gray-600">Price: </span><span className="text-rose-600">${book.price}</span></h4>
                    <p className="text-justify"><span className="text-gray-600 font-medium">Description:</span> {book.description}</p>
                    <button className="text-white bg-primary_color hover:bg-secondary_color px-8 py-3 font-semibold rounded my-6">Add To Cart</button>
                    <p className="mb-1"><span className="text-gray-600 font-medium">Category: </span>{book.category}</p>
                    <p><span className="text-gray-600 font-medium">Tags: </span>{book.tags.join(', ')}</p>
                </div>
            </div>
            <div className="p-6 border border-primary_color rounded-lg mt-8">
                <h2 className="text-2xl font-bold mb-6">Similar books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        [...Array(4)].map((_, index) =>
                            <SimilarBooksCard key={index}></SimilarBooksCard>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/books/${params.bookID}`)
    const data = await res.json();

    return {
        props: {
            book: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/books");
    const books = await res.json();

    const paths = books.map(book => {
        return {
            params: {
                bookID: `${book._id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default BookDetails;