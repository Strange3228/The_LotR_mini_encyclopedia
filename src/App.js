import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Books from './Components/Books';
import Films from './Components/Films';
import Characters from './Components/Characters';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/films" component={Films} />
          <Route path="/characters" component={Characters} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
