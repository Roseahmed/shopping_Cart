import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../contexts/products/ProductsProvider";
import { CartContext } from "../contexts/cart/CartProvider";
import "./Cart.css";

const Cart = () => {

    const { error, products, setProducts } = useContext(ProductsContext);
    const { setCartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const increment = (id) => {
        let newCartItems = products.map(product => {
            if (product._id === id) {
                product.quantity += 1;
                return product;
            }
            return product;
        });
        setProducts(newCartItems);
    }

    const decrement = (id) => {
        let newCartItems = products.map(product => {
            if (product._id === id) {
                if (product.quantity <= 0) {
                    return product;
                }
                product.quantity -= 1;
                return product;
            }
            return product;
        });
        setProducts(newCartItems);
    }

    const handleCheckout = (id, name, quantity) => {
        setCartItems({ id, name, quantity });
        navigate("/checkout");
    }

    return (
        <Fragment>
            {products.length >= 1 ? (
                <Fragment>
                    <div>
                        <h1>Mentoons Shooping Cart</h1>
                        <h2>Add to Cart</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="table-row">Product Name</th>
                                <th className="table-row">Increment/Decrement</th>
                                <th className="table-row">Quantity</th>
                                <th className="table-row"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, key) => {
                                return (
                                    <tr key={product._id}>
                                        <td>{product.name}</td>
                                        <td>
                                            <button
                                                className="button"
                                                onClick={() => { increment(product._id) }}>+
                                            </button>
                                            <button
                                                style={{ outline: 'none' }}
                                                className="button"
                                                onClick={() => { decrement(product._id) }}>-
                                            </button>
                                        </td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <button
                                                onClick={() => { handleCheckout(product._id, product.name, product.quantity) }}> Checkout
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Fragment>
            ) : (
                <div>
                    <h2>Product Fetch Error!!!</h2>
                    <h2>Message: {error.message}</h2>
                    <h2>Status: {error.status}</h2>
                </div>
            )}
        </Fragment>
    )
}

export default Cart;