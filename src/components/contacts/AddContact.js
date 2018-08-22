import React, { Component } from 'react';

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };


  submitHandler = e => {
      e.preventDefault();
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
        <div className="card mb-3">
            <div className="card-header">
                <h1>Add Contact</h1>
            </div>
            <div className="card-body">
                <form onSubmit={this.submitHandler}>
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
    );
  }
}

export default AddContact;
