import { toast } from "react-hot-toast";

const useAddCart = (user, cart, setCart, id, price) => {

    if (user?.email) {
        const checkBook = cart.find(book => book.bookId === id);
        const book = { bookId: id, price }
        if (checkBook) {
            toast.error("Book already added")
        } else {
            setCart([...cart, book])
            toast.success("Book added to cart")
        }
    }
    else {
        toast.error('Please Login first')
    }


    return
}

export default useAddCart;