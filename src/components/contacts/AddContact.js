import React, { Component } from 'react';
import { Consumer } from '../../context.js';
import uuid from 'uuid';

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
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control from-control-lg"
                                        placeholder="Enter name"
                                        // when you set 'value' to input, component becomes controlled component and need to add event handler function onChange which will update state based on input data
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control from-control-lg"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control from-control-lg"
                                        placeholder="Enter phone"
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                </div>
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
