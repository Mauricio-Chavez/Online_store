import { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    function addProductToCart(prod) {
        console.log('Global fn')
        var copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }
    function removeProductFromCart(data) {
        //remove data from cart
        var copy = [...cart];
        copy = copy.filter((prod) => prod._id !== data._id);
        setCart(copy);
    }
    return (
        <DataContext.Provider value={{
            cart: cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}>{props.children}</DataContext.Provider>
    )
}

export default GlobalProvider;