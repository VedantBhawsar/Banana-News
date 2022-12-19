import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NavBar extends Component {
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Banana Newz</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/home'}>Home</Link >
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/business'>Business</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/entertainment'>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/health'>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/science'>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/sports'>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/technology'>Technology</Link>
                            </li>
                        </ul>
                        <div class="btn-group mx-5  ">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Country
                            </button>
                            <ul class="dropdown-menu">
                                <li><Link to="/" key='6' className="dropdown-item" style={{ cursor: 'pointer' }} onClick={this.props.InFilter}>India</Link></li>
                                <li><Link to="/" key='1' className="dropdown-item" style={{ cursor: 'pointer' }} onClick={this.props.UsFilter}>United State</Link></li>
                                <li><Link to="/" key='2' className="dropdown-item" style={{ cursor: 'pointer' }} onClick={this.props.JpFilter}>Japan</Link></li>
                                <li><Link to="/" key='3' className="dropdown-item" style={{ cursor: 'pointer' }} onClick={this.props.ChFilter}>China</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
