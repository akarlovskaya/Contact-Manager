import React, { Component } from 'react';
// import Contact component
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "jdoe@mail.com",
                    phone: "(555)555-55-55"
                },
                {
                    id: 2,
                    name: "Marta Doe",
                    email: "mdoe@mail.com",
                    phone: "(555)555-55-56"
                },
                {
                    id: 3,
                    name: "Tim Doe",
                    email: "tdoe@mail.com",
                    phone: "(555)555-55-57"
                }
            ]
    }

    deleteContact = id => {
        const { contacts } = this.state;
        // filter out contact with passed id
        const newContacts = contacts.filter(contact => contact.id !== id);
        // update state with filtered contacts array
        this.setState({
            contacts: newContacts
        });
    }

  render() {
    // destructuring contacts from state
    const { contacts } = this.state;

    return (
        // add React.Fragment instead using html element as wrapper (available in React 16)
        <React.Fragment>
            {contacts.map(contact => (
                <Contact
                    // to avoid error "Each child in an array or iterator should have a unique "key" prop." - add key prop
                    key={contact.id}
                    // name={contact.name}
                    // email={contact.email}
                    // phone={contact.phone}
                    // another way to pass props - as object
                    contact={contact}
                    // pass clicked contact's id to deleteContact method
                    deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
            ))}
        </React.Fragment>
    );
  }
}

export default Contacts;
