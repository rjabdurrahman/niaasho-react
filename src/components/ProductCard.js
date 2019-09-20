import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './ProductCard.css';

export class ProductCard extends Component {
    render() {
        return (
            <Link to={'/product/' + this.props.product.id}>
                <div className="w3-border product" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'no_img.jpg'})` }}>
                    <span className="p-price">৳{this.props.product.price}</span>
                    <div className="p-footer">
                        <div className="p-name w3-border-top">{this.props.product.name}</div>
                        <button className="w3-button w3-block w3-border-top w3-dark-grey">Buy</button>
                    </div>
                </div>
            </Link>
        )
    }
}

export default ProductCard
