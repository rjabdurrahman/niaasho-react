import React, { Component } from 'react'
import axios from 'axios';
import apiUrl from '../config';
import ProductCard from './ProductCard'

export class CategoryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    UNSAFE_componentWillMount() {
        const { cat } = this.props.match.params;
        axios.get(apiUrl + 'products/' + cat)
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        const allProducts = this.state.products.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
        ));
        let catText = this.props.match.params.cat.replace('-',' ').toUpperCase();
        return (
            <div style={{ marginTop: '65px' }}>
                <h5>Category: {catText}</h5>
                {allProducts}
            </div>
        )
    }
}

export default CategoryPage
