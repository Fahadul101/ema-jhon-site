import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd ) => total + prd.price,0);
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Total Price : {totalPrice}</p>
            <p>Thank You</p>
        </div>
    );
};

export default Cart;