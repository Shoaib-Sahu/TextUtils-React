import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TextUtils</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div
                        className={`bg-${props.mode === 'light'
                            ? 'dark'
                            : 'light'} rounded mx-2 `}
                        style={{ height: "20px", width: "20px", cursor: 'pointer' }}
                        onClick={() => { props.toggleMode('dark') }}>
                    </div>
                </div>
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};