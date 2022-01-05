import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { ProductsProvider } from "./contexts/products/ProductsProvider";
import { CartProvider } from "./contexts/cart/CartProvider";

ReactDom.render(
    <CartProvider>
        <ProductsProvider>
            <App />
        </ProductsProvider>
    </CartProvider>
    , document.getElementById("root"));


