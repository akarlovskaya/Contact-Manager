import React, { Component } from 'react';
import axios from 'axios';
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
        case 'ADD_CONTACT':
            return {
                ...state,
                // add new contact to state
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }

}

// Provider Cmponent is used higher in the three and accepts prop called value (with state here)
export class Provider extends Component {
    state = {
        contacts: [],
            // function with action
            dispatch: action => this.setState(state => reducer(state, action))

    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({ contacts: res.data }));
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
