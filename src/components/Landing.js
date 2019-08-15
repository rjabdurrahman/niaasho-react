import React, { Component } from 'react'
import Navbar from './Navbar';
import Slider from './Slider';
import ProductCard from './ProductCard';

export class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Slider></Slider>
                <div className="d-flex justify-content-center mt-4 flex-wrap">
                    <ProductCard></ProductCard>
                </div>
            </div>
        )
    }
}

export default Landing
