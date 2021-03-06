import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

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

    onDeleteClick = async (id, dispatch) => {
        // try/catch workaround for 'deleting' new contact from jsonplaceholder API
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => {dispatch({type: 'DELETE_CONTACT', payload: id})});
        } catch(e) {
            dispatch({type: 'DELETE_CONTACT', payload: id});
        }
    }

  render() {
    // to get props in class component use 'this' keyword
    // define vars using destructuring
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return (
                    <div className="card card-body mb-3">
                        {/* <h4>{this.props.name}</h4> */}
                        <h4>{name}
                            <i onClick={this.onShowClick}
                                className="fas fa-sort-down"
                                style={{ cursor: 'pointer' }}></i>
                            <i onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                className="fas fa-times"
                                style={{ cursor: 'pointer', color: 'red', float: 'right' }}
                            ></i>
                            <Link to={`contact/edit/${id}`}>
                                <i
                                    className="fas fa-pencil-alt"
                                    style={{ cursor: 'pointer', color: 'black', float: 'right', marginRight: '20px', fontSize: '17px', marginTop: '4px' }}
                                />
                            </Link>
                        </h4>

                        { showContactInfo ? (
                            <ul className="list-group">
                                <li className="list-group-item">{email}</li>
                                <li className="list-group-item">{phone}</li>
                            </ul>
                        ) : null }

                    </div>
                )
            }}
        </Consumer>
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
    contact: PropTypes.object.isRequired
}

// to render this - export it and import in App.js
export default Contact;
