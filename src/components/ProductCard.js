import React, { Component } from 'react'
import './ProductCard.css';

export class ProductCard extends Component {
    render() {
        return (
            <div className="card product-card">
                <img className="card-img-top mt-4" src="https://cdn.othoba.com/images/thumbs/0046378_rfl-water-pump-centrifugal-1x1-15hp-racm170.jpeg" alt="Har" height={200} />
                <div className="card-body">
                    <p className="card-text" style={{ marginBottom: '6px', fontWeight: 500, fontSize: '12px' }}>
                        {this.props.product.name}</p>
                    <a href="/dara" className="btn btn-success btn-sm pl-4 pr-4">Buy</a>
                </div>
            </div>
        )
    }
}

export default ProductCard
