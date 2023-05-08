import React from 'react';

const Cart = (props) => {
    const { cart, clearCart } = props;
    let total = 0;
    let quantity = 0;
    let shipping = 0;
    for (const carts of cart) {
        quantity = quantity + carts.quantity;
        total = total + carts.price * carts.quantity;
        shipping = shipping + carts.shipping

    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div>
            <h6>Order Summary</h6>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={clearCart} className='btn btn-sm btn-outline-success text-white 
            border-white'>Clear Cart</button><br />

            <button className='mt-2 btn btn-sm btn-outline-success text-white 
            border-white'><a className='text-white text-decoration-none' href="/orderReview">Review Order</a></button>


        </div>
    );
};

export default Cart;