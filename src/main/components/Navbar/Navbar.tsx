import React, { useState } from 'react';
import { HOME_PATH, TIMER_PATH } from '../../constants/constants';
import NavbarBurger from '../NavbarBurger/NavbarBurger';
import { NavLink } from 'react-router-dom';

import 'line-awesome/dist/line-awesome/css/line-awesome.css';

const cx = require('classnames');

const Navbar = () => {
    
    const [isActive, setIsActive] = useState(false);

    const toggleIsActive = () => setIsActive(!isActive);
    
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href={HOME_PATH} className="navbar-item">
                    <span className="icon is-medium">
                        <i className="la-2x las la-globe"></i>
                    </span>
                    <span className="icon is-medium">
                        <i className="la-2x las la-hourglass-half"></i>
                    </span>
                </a>
                <NavbarBurger
                    isActive={isActive}
                    toggleIsActive={toggleIsActive}
                />
            </div>
            <div className={cx("navbar-menu", isActive ? "is-active" : "")}>
                <NavLink className="navbar-item" activeClassName="is-active" to={HOME_PATH}>Home</NavLink>
                <NavLink className="navbar-item" activeClassName="is-active" to={TIMER_PATH}>Timer</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;