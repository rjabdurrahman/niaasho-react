import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import apiUrl from '../config';

export class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }

    UNSAFE_componentWillMount() {
        axios.get(apiUrl + 'category/all')
            .then(res => this.setState({ categories: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        // const allCategory = this.state.categories.map(category => (
        //     <Link key={category.id} className="dropdown-item" to={'/category/' + category.route}>{category.name}</Link>
        // ));

        return (
            <div className="w3-bar w3-light-grey w3-border" style={{ display: 'flex' }}>
                <Link to="/" className="w3-bar-item w3-button">
                    <i className="fa fa-align-justify" style={{ fontSize: '24px' }} />
                </Link>
                <input type="text" className="w3-bar-item w3-input w3-white" style={{ width: '100%', overflow: 'hidden' }} placeholder="Search.." />
                <Link to="/" className="w3-bar-item w3-button">
                    <i className="fa fa-search" style={{ fontSize: '24px' }} />
                </Link>
            </div>
        )
    }
}

export default Navbar
