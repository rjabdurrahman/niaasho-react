import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

export class ProductList extends Component {
    render() {
        const products = this.props.products.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
        ));
        return (
            <div className="product-container">
                {products}
            </div>
        )
    }
}

export default ProductList
