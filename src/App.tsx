import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DateTimePicker from './main/components/DateTimePicker/DateTimePicker';
import Timer from './main/components/Timer/Timer';
import NavbarBurger from './main/components/NavbarBurger/NavbarBurger';
import { HOME_PATH, TIMER_PATH } from './main/constants/constants';
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
                        <a href={HOME_PATH} className="navbar-item">OBS Browser Timer</a>
                        <NavbarBurger
                            isActive={isActive}
                            toggleIsActive={toggleIsActive}
                        />
                    </div>
                    <div className={cx("navbar-menu", isActive ? "is-active" : "")}>
                        <Link className="navbar-item" to={HOME_PATH}>Home</Link>
                        <Link className="navbar-item" to={TIMER_PATH}>Timer</Link>
                    </div>
                </nav>

                <Switch>
                    <Route exact path={HOME_PATH}>
                        <DateTimePicker />
                    </Route>
                    <Route path={`${TIMER_PATH}/:datetime`}>
                        <Timer/>
                    </Route>
                </Switch>
            </section>
        </Router>
    );
};

export default App;
