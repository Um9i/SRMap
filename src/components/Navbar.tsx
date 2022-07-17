import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-dark bg-primary">
                <div className='container my-1'>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/"><i className="bi bi-house-heart-fill"></i> Home</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <i className="bi bi-search-heart text-white my-2"></i>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;