import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Books from './Components/Books';
import Films from './Components/Films';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/films" component={Films} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
