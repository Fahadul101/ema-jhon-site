import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const product = (props) => {
    console.log(props.product);
    const {img, name,seller,price,stock} = props.product;
    return (
        <div className = " single-product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            <br/>
            <p><small>by:{seller}</small></p>
            <p>${price}</p>
            <p><small>only{stock} left in stock - Order soon</small></p>
            <button className="main-button"
            onClick ={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>

            </div>
        </div>
    );
};

export default product;