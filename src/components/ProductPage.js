import React, { Component } from 'react'
import axios from 'axios';
import apiUrl from '../config';

export class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {}
        }
    }

    UNSAFE_componentWillMount() {
        const { id } = this.props.match.params;
        axios.get(apiUrl + 'products/' + id)
            .then(res => this.setState({ product: res.data[0] }))
            .catch(err => console.log(err));
    }

    render() {
        let {id, name, details} = this.state.product;
        return (
            <div>
                Product id: {id} <br></br>
                Product Name: {name} <br></br>
                Product details: {details} <br></br>
            </div>
        )
    }
}

export default ProductPage
