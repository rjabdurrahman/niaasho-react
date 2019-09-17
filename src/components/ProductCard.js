import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './ProductCard.css';

export class ProductCard extends Component {
    render() {
        return (
            <div className="card product-card">
                <Link to={'/product/' + this.props.product.id}>

                    <img className="card-img-top mt-4" src={process.env.PUBLIC_URL + '/no_img.jpg'} alt="Har" height={200} />
                    <div className="card-body">
                        <p className="card-text" style={{ marginBottom: '6px', fontWeight: 500, fontSize: '12px' }}>
                            {this.props.product.name}</p>
                        <a href="/dara" className="btn btn-success btn-sm pl-4 pr-4">Buy</a>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ProductCard
