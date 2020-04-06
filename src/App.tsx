import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DateTimePicker from './main/components/DateTimePicker/DateTimePicker';
import Timer from './main/components/Timer/Timer';
import NavbarBurger from './main/components/NavbarBurger/NavbarBurger';
import './App.scss';
const cx = require('classnames');


function App() {
    const [isActive, setIsActive] = useState(false);
    
    const toggleIsActive = () => setIsActive(!isActive);

  return (
    <Router>
    <section className="section">
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">OBT</a>
                <NavbarBurger 
                    isActive={isActive}
                    toggleIsActive={toggleIsActive}
                />    
            </div>
            <div className={cx("navbar-menu", isActive ? "is-active" : "")}>
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
