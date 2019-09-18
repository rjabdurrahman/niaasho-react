import React, { Component } from 'react'
import axios from 'axios';
import apiUrl from '../config';
import ProductList from './ProductList'

export class ProdcutRender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    UNSAFE_componentWillMount() {
        const { cat } = this.props.match.params;
        const { key } = this.props.match.params;
        if(cat){
            axios.get(apiUrl + 'products/' + cat)
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err));
        }
        else if(key){
            axios.get(apiUrl + 'products/search/' + key)
            .then(res => this.setState({ products: res.data }))
            .catch(err => console.log(err));
        }
    }

    render() {
        let {cat} = this.props.match.params;
        let {key} = this.props.match.params;
        let title = '';
        if(cat) title = 'Category: ' + cat.replace('-',' ').toUpperCase();
        else if(key) title = 'Search Result for: ' + key;
        return (
            <div style={{ marginTop: '65px' }}>
                <h5>{title}</h5>
                <ProductList products={this.state.products}></ProductList>
            </div>
        )
    }
}

export default ProdcutRender
