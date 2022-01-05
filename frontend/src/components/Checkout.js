import React, { Fragment, useContext } from "react";
import { CartContext } from "../contexts/cart/CartProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Checkout = () => {

    const { cartItems } = useContext(CartContext);

    const buy = () => {
        toast("Your Order has been placed");
    }

    return (
        <Fragment>
            {typeof cartItems.name !== "undefined" ? (
                <div className="cart-item">
                    <h2>Checkout-page</h2>
                    <h3>ProductName:{cartItems.name}</h3>
                    <h3>Quantity:{cartItems.quantity}</h3>
                    <button onClick={buy}>Buy</button>
                </div>
            ) : (
                <div>
                    <h2>No Item To Buy</h2>
                </div>
            )}
        </Fragment>
    )
}

export default Checkout;