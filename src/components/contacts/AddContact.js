import React, { Component } from 'react';
import { Consumer } from '../../context.js';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

// This is Controlled component
// we have state, we get values from props and onChange events
// https://reactjs.org/docs/forms.html#controlled-components

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };


  submitHandler = (dispatch, e) => {
      e.preventDefault();
      const { name, email, phone } = this.state;

      const newContact = {
          id: uuid(),
          name,
          email,
          phone
      };

      dispatch({
          type: 'ADD_CONTACT',
          payload: newContact
      });

      // clear inputs after submit
      this.setState(
          {
              name: '',
              email: '',
              phone: ''
          }
      );

      console.log(this.state);
  };

  // use "name" atr in input to determine the input field
  onChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  render() {
    const { name, email, phone } = this.state;

    return (
        <Consumer>
            {/* here value holds state */}
            {value => {
                // getting dispatch from state
                const { dispatch } = value;

                return (
                    <div className="card mb-3">
                        <div className="card-header">
                            <h1>Add Contact</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler.bind(this, dispatch)}>
                                <TextInputGroup
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={this.onChange}
                                />
                                <TextInputGroup
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={this.onChange}
                                />
                                <TextInputGroup
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Phone"
                                    value={phone}
                                    onChange={this.onChange}
                                />
                                <input
                                    type="submit"
                                    value="Add Contact"
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

export default AddContact;
