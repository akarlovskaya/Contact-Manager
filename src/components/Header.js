// functional component (rfc)
// header is going to be static markup so we can use functional component (rfc)
import React from 'react';
// to validate data in props add
import PropTypes from 'prop-types';

// another syntax to export component:
export const Header = props => {
    // destructuring props
    const { branding } = props;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
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
