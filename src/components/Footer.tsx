import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <nav className='navbar fixed-bottom navbar-dark bg-primary'>
                <div className='container'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                            <Link className='btn btn-primary btn-footer' to='/'>
                                <div className=''>
                                    <i className='bi bi-house-fill text-white'></i>
                                </div>
                                <div className='btn-text'>Home</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Footer;