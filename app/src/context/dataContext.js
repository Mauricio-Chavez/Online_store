import { createContext } from "react";

const DataContext = createContext({
    cart: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {},
});

export default DataContext;