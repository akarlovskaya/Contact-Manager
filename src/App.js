import React, { Component } from 'react';
// add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// this is default import, no need {}
import Contacts from './components/contacts/Contacts';
// {} is named import, name has to be the same as it is in component
import { Header } from './components/layout/Header';
import { Provider } from './context';
import AddContact from './components/contacts/AddContact';


class App extends Component {
  render() {
    // here vars can be defined
    return (
    // here only JSX goes

        // wrap all app in Provider to have access to state value
        <Provider>
          <div className="App">
              {/* add props for functional component */}
              <Header branding="Content Manager" />
              <div className="container">
                  <AddContact />
                  <Contacts />
              </div>
          </div>
      </Provider>
    );
  }
}

export default App;
