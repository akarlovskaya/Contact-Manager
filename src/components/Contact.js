import React, { Component } from 'react';
import PropTypes from 'prop-types';

// this is class component (rcc)
class Contact extends Component {
    // add state to handle whether contact shown or not
    state = {
        showContactInfo: false
    };

    onShowClick = e => {
        //state is immutable (you can't change it directly), use setState()
        // toggle state
        this.setState( {showContactInfo: !this.state.showContactInfo} )
    };

    onDeleteClick = () => {
        // to get access to state in Contacts.js we need to use props
        this.props.deleteClickHandler();
    }

  render() {
    // to get props in class component use 'this' keyword
    // define vars using destructuring
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
        <div className="card card-body mb-3">
            {/* <h4>{this.props.name}</h4> */}
            <h4>{name}
                <i onClick={this.onShowClick}
                    className="fas fa-sort-down"
                    style={{ cursor: 'pointer' }}></i>
                <i onClick={this.onDeleteClick}
                    className="fas fa-times"
                    style={{ cursor: 'pointer', color: 'red', float: 'right' }}
                ></i>
            </h4>

            { showContactInfo ? (
                <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>
            ) : null }

        </div>
    );
  }
}

// add defauil value
Contact.defaultProps = {
    name: 'Name',
    email: 'Email',
    phone: 123,
}
// validate prop data
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

// to render this - export it and import in App.js
export default Contact;
