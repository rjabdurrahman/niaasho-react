import React, { Component } from 'react';
import ProductCard from './ProductCard'

export class ProductList extends Component {
    render() {
        const products = this.props.products.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
        ));
        return (
            <div>
                {products}
            </div>
        )
    }
}

export default ProductList
