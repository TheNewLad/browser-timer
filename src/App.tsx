import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import DateTimePicker from './main/components/DateTimePicker/DateTimePicker';
// import 'bulma/css/bulma.min.css';
import Timer from './main/components/Timer/Timer';

function App() {
  return (
    <Router>
    <section className="section">
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">OBT</a>
            </div>
            <div className="navbar-menu">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/timer">Timer</Link>
            </div>
        </nav>

        <Switch>
            <Route exact path="/">
                <DateTimePicker />
            </Route>
            <Route path="/timer">
                <Timer />
            </Route>
        </Switch>
    </section>
</Router>
  );
};

export default App;
