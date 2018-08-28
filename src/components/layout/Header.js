// functional component (rfc)
// header is going to be static markup so we can use functional component (rfc)
import React from 'react';
// to validate data in props add
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// another syntax to export component:
export const Header = props => {
    // destructuring props
    const { branding } = props;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <NavLink exact to="/" className="navbar-brand">{branding}</NavLink>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">
                                <i className="fas fa-home"></i>Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact/add" className="nav-link">
                                <i className="fas fa-plus"></i>Add
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                <i className="fas fa-question"></i>About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// Define default value using special 'defaultProps' property for Header prop (in case there is no any defined)
Header.defaultProps = {
    branding: 'My App'
}
// Validate data using PropTypes object
Header.propTypes = {
    branding: PropTypes.string.isRequired
}

// no need to 'export default Header';
