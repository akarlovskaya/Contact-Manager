import React, { Component } from 'react';

// This is unControlled component - it holds state internally and uses refs (instead of props and onChange event) to find an element and get its value (form data is handled by the DOM itself)
// https://reactjs.org/docs/uncontrolled-components.html

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        // we do not have state here (it's unControlled component)
        // so to grab input fields we use "refs" property and create constructor
        // creating references using React.createRef() and attaching them to each field
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

  submitHandler = e => {
      e.preventDefault();
      // to access value use ".current.value"
      const contact = {
          name: this.nameInput.current.value,
          email: this.emailInput.current.value,
          phone: this.phoneInput.current.value
      }
      console.log(contact);
  };

// declaring default Props and pretending they coming from Redux
  static defaultProps = {
      name: 'Fred Thomas',
      email: 'fred@gmail.com',
      phone: '(777)-777-7777'
  }


  render() {
    const { name, email, phone } = this.props;

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
                            // specify the initial value, but leave subsequent updates uncontrolled using defaultValue
                            defaultValue={name}
                            ref={this.nameInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control from-control-lg"
                            placeholder="Enter email"
                            defaultValue={email}
                            ref={this.emailInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control from-control-lg"
                            placeholder="Enter phone"
                            defaultValue={phone}
                            ref={this.phoneInput}
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
