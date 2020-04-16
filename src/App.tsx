import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DateTimePicker from './main/components/DateTimePicker/DateTimePicker';
import Timer from './main/components/Timer/Timer';
import { HOME_PATH, TIMER_PATH } from './main/constants/constants';
import './App.scss';
import Navbar from './main/components/Navbar/Navbar';



function App() {

    return (
        <Router>
            <Switch>
                <Route exact path={HOME_PATH}>
                    <section className="section">
                        <Navbar />
                        <DateTimePicker />
                    </section>
                </Route>
                <Route exact path={`${TIMER_PATH}/:datetime`}>
                    <Timer />
                </Route>
                <Route path={TIMER_PATH}>
                    <Timer simpleFormat/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
