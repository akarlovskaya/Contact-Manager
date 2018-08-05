import React, { Component } from 'react';
// add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// this is default import, no need {}
import Contacts from './components/Contacts';
// {} is named import, name has to be the same as it is in component
import { Header } from './components/Header';


class App extends Component {
  render() {
    // here vars can be defined
    return (
    // here only JSX goes
      <div className="App">
          {/* add props for functional component */}
          <Header branding="Content Manager"/>
          <div className="container">
              <Contacts/>
          </div>

      </div>
    );
  }
}

export default App;
