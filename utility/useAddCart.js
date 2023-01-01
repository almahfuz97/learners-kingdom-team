
const useAddCart = (fullCart, setCart, id) => {
    const { cart } = fullCart

    const checkBook = cart.find(book => book === id);
    if (checkBook) {
        alert("Book already added")
    } else {
        setCart(prev => {
            return {
                ...prev,
                cart: [...cart, id]
            }
        })
        alert("Book added to cart")
    }
    return
}

export default useAddCart;