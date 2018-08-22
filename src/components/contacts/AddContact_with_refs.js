import React, { Component } from 'react';

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
                            // when you set 'value' to input, component becomes controlled component and need to add event handler function onChange which will update state based on input data
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
