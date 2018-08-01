import React, { Component } from 'react';
// this is class component (rcc)
class Contact extends Component {
  render() {
    return (
        <div>
            <h4>John Doe</h4>
            <ul>
                <li>Email: jdoe@mail.com</li>
                <li>Phone: (555)555-55-55></li>
            </ul>
        </div>
    );
  }
}
// to render this - export it and import in App.js
export default Contact;
