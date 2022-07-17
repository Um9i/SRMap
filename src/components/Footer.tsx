import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <nav className="Footer navbar fixed-bottom navbar-light bg-light border-top">
                <div className='container'>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="bi bi-house-heart-fill text-primary"></i> Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Footer;