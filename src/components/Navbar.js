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
        const allCategory = this.state.categories.map(category => (
            <Link key={category.id} className="dropdown-item" to={'/category/' + category.route}>{category.name}</Link>
        ));

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top nav-top">
                <Link className="navbar-brand" to="/">NiaAsho</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li class="nav-item active">

              <Link class="nav-link" to="data.html">Home <span class="sr-only">(current)</span></Link>

          </li>

          <li class="nav-item">

              <Link class="nav-link" to="data.html">Link</Link>

          </li> */}
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="data.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {allCategory}
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        )
    }
}

export default Navbar
