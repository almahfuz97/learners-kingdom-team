
const useAddCart = (cart, setCart, id) => {

    const checkBook = cart.find(book => book === id);
    if (checkBook) {
        alert("Book already added")
    } else {
        setCart([...cart, id])
        alert("Book added to cart")
    }
    return
}

export default useAddCart;