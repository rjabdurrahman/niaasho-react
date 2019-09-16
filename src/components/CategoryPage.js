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

    componentWillMount() {
        const { cat } = this.props.match.params;
        console.log(apiUrl + 'products/' + cat);
        axios.get(apiUrl + 'products/' + cat)
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        const allProducts = this.state.products.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
        ));
        return (
            <div style={{marginTop: '65px'}}>
                {allProducts}
            </div>
        )
    }
}

export default CategoryPage
