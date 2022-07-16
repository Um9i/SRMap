import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className='container my-2'>
                    <Link className="navbar-brand" to="/">
                        Salford Royal Site Map
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;