import React, { Component } from 'react';
// add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// this is default import, no need {}
import Contacts from './components/contacts/Contacts';
// {} is named import, name has to be the same as it is in component
import { Header } from './components/layout/Header';
import { Provider } from './context';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    // here vars can be defined
    return (
    // here only JSX goes

        // wrap all app in Provider to have access to state value
        <Provider>
            <Router>
                <div className="App">
                    {/* add props for functional component */}
                    <Header branding="Content Manager" />
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Contacts} />
                            <Route path='/contact/add' component={AddContact} />
                            <Route path='/about' component={About} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>

      </Provider>
    );
  }
}

export default App;
