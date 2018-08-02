import React, { Component } from 'react';
import './App.css';
// this is default import, no need {}
import Contact from './components/Contact';
// {} is named import, name has to be the same as it is in component
import { Header } from './components/Header';

class App extends Component {
  render() {
    // here vars can be defined
    return (
    // here only JSX goes
      <div className="App">
          {/* add props for functional component */}
          <Header branding="Content Manager1"/>
          {/* add props for class component */}
          <Contact name="John Doe" email="jdoe@mail.com" phone="(555)555-55-55"/>
          <Contact name="Kate Doe" email="kdoe@mail.com" phone="(555)555-55-56"/>
      </div>
    );
  }
}

export default App;
