import React, { Component } from 'react';
import { Consumer } from '../../context.js';
// import uuid from 'uuid';
// import { Link } from 'react-router-dom';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

// This is Controlled component
// we have state, we get values from props and onChange events
// https://reactjs.org/docs/forms.html#controlled-components

class EditContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

  async componentDidMount() {
      const { id } = this.props.match.params;
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const contact = res.data;

      this.setState({
          name: contact.name,
          email: contact.email,
          phone: contact.phone
      });
  }


  submitHandler = async (dispatch, e) => {
      e.preventDefault();
      const { name, email, phone } = this.state;

      // check for errors
      if (name === '') {
          this.setState({ errors: {name: 'Name is required'} });
          return;
      }
      if (email === '') {
          this.setState({ errors: {email: 'Email is required'} });
          return;
      }
      if (phone === '') {
          this.setState({ errors: {phone: 'Phone is required'} });
          return;
      }

      // update Contact
      const updateContact = {
          name,
          email,
          phone
      }

      const { id } = this.props.match.params;
      const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

      dispatch({ type: 'UPDATE_CONTACT', payload: res.data });




      // clear inputs after submit
      this.setState(
          {
              name: '',
              email: '',
              phone: '',
              errors: {}
          }
      );

      // add redirect to home page
      this.props.history.push('/');
  };

  // use "name" atr in input to determine the input field
  onChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  render() {
    const { name, email, phone, errors } = this.state;


    return (
        <Consumer>
            {/* here value holds state */}
            {value => {
                // getting dispatch from state
                const { dispatch } = value;

                return (
                    <div className="card mb-3">
                        <div className="card-header">
                            <h1>Edit Contact</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler.bind(this, dispatch)}>
                                <TextInputGroup
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TextInputGroup
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TextInputGroup
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Phone"
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                />
                                <input
                                    type="submit"
                                    value="Update Contact"
                                    className="btn btn-light btn-block"
                                />
                            </form>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}

export default EditContact;
