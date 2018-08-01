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
          <Header />
          <Contact />
      </div>
    );
  }
}

export default App;
