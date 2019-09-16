import React, { Component } from 'react'
import Navbar from './Navbar';
import Slider from './Slider';
import ProductCard from './ProductCard';
import axios from 'axios';
import apiUrl from '../config';

export class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        axios.get(apiUrl + 'products')
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        const allProducts = this.state.products.map(product => (
            <ProductCard key={product.id} product={product}></ProductCard>
        ));

        return (
            <div>
                <Navbar></Navbar>
                <Slider></Slider>
                <div className="d-flex justify-content-center mt-4 flex-wrap">
                    {allProducts}
                </div>
            </div>
        )
    }
}

export default Landing
