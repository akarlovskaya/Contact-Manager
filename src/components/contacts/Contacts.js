import React, { Component } from 'react';
// import Contact component
import Contact from './Contact';
// add Consumer to use contacts
import { Consumer } from '../../context';

class Contacts extends Component {

  render() {
    return (
        // here we use Consumer to get Provider value with state
        <Consumer>
            {/* here goes function that accept value from Provider and must return React Element JSX */}
            {/* if I need to use js  code in jsx - wrap it in {} */}
            {value => {
                // destructuring contacts from value (state)
                const { contacts } = value;
                return (
                    // React.Fragment is like blank React tag, not visible in browser (allows to not use html tag as wrapper if not neededs)
                    <React.Fragment>
                        <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> list</h1>
                        {contacts.map(contact => (
                            <Contact
                                // to avoid error "Each child in an array or iterator should have a unique "key" prop." - add key prop
                                key={contact.id}
                                // name={contact.name}
                                // email={contact.email}
                                // phone={contact.phone}
                                // another way to pass props - as object
                                contact={contact}
                            />
                        ))}
                    </React.Fragment>
                )
            }}
        </Consumer>
    )
  }
}

export default Contacts;
