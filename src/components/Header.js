// functional component (rfc)
// header is going to be static markup so we can use functional component (rfc)
import React from 'react';
// to validate data in props add
import PropTypes from 'prop-types';
// add css
import './header.css';

// another syntax to export component:
export const Header = props => {
    // to use props in functional component need to pass them as 'props' and use with {props.NameHere}
    return (
            <div>
                <h1>{props.branding}</h1>
            </div>
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
