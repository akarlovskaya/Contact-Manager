import React, { Component } from 'react';
// creating new context (this is new React's Context API (from 16 version)), returns object with Provider and Consumer
const Context = React.createContext();

// 'action' will be an object and will have type
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }

}

// Provider Cmponent is used higher in the three and accepts prop called value (with state here)
export class Provider extends Component {
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
            ],
            // function with action
            dispatch: action => this.setState(state => reducer(state, action))
            
    }

    render() {
        return (
            // make state accessible through whole app by passing it as 'value' prop
            // Provider's value holds the state
            <Context.Provider value={this.state}>
                {/* to pass children to a component use 'children' special prop */}
                {this.props.children}
            </Context.Provider>
        )
    }
}

// create Consumer var to use it instead of writing <Context.Consumer>
export const Consumer = Context.Consumer;
