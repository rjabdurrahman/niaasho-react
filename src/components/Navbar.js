import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top nav-top">
                <a className="navbar-brand" href="/">NiaAsho</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li class="nav-item active">

              <a class="nav-link" href="data.html">Home <span class="sr-only">(current)</span></a>

          </li>

          <li class="nav-item">

              <a class="nav-link" href="data.html">Link</a>

          </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="data.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="data.html">Action</a>
                                <a className="dropdown-item" href="data.html">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="data.html">Something else here</a>
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
