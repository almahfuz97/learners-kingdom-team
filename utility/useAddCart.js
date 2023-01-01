
const useAddCart = (cart, setCart, id, price) => {

    const checkBook = cart.find(book => book === id);
    const book = { bookId: id, price }
    if (checkBook) {
        alert("Book already added")
    } else {
        setCart([...cart, book])
        alert("Book added to cart")
    }
    return
}

export default useAddCart;