import React, { Component } from 'react';
import PropTypes from 'prop-types';

// this is class component (rcc)
class Contact extends Component {
  render() {
    // to get props in class component use 'this' keyword
    // using destructuring
    const { name, email, phone } = this.props;

    return (
        <div>
            {/* <h4>{this.props.name}</h4> */}
            {/* add inline style */}
            <h4 style={{color: '#333'}}>{name}</h4>
            <ul>
                <li style={liStyle}>{email}</li>
                <li style={liStyle}>{phone}</li>
            </ul>
        </div>
    );
  }
}

// add style as variable
const liStyle = {
    listStylePosition: 'outside'
}

// add defauil value
Contact.defaultProps = {
    name: 'Name',
    email: 'Email',
    phone: 123,
}
// validate prop data
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

// to render this - export it and import in App.js
export default Contact;
