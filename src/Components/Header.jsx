import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='bg-dark'>
                <div className='container'>
                    <nav className="navbar navbar-expand-md navbar-dark">
                        {/* Brand */}
                        <a className="navbar-brand" href="#">Start Bootstrap</a>

                        {/* Toggler/collapsibe Button */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon" />
                        </button>

                        {/* Navbar links */}
                        <div className="collapse navbar-collapse ml-auto" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                </div>
            </div>
        )
    }
}
