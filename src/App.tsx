import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import DateTimePicker from './main/components/DateTimePicker/DateTimePicker';
import Timer from './main/components/Timer/Timer';
import NavbarBurger from './main/components/NavbarBurger/NavbarBurger';
import { HOME_PATH, TIMER_PATH } from './main/constants/constants';
import './App.scss';
import Navbar from './main/components/Navbar/Navbar';



function App() {

    return (
        <Router>
            <section className="section">
                <Navbar />

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
