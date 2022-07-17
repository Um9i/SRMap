import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="Navbar navbar fixed-top navbar-dark bg-primary border-bottom">
                <div className='container my-1'>
                    <form className="d-flex w-100">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <i className="bi bi-search-heart text-white m-2"></i>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;