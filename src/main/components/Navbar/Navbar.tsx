import React, { useState } from 'react';
import { HOME_PATH, TIMER_PATH } from '../../constants/constants';
import NavbarBurger from '../NavbarBurger/NavbarBurger';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';

const cx = require('classnames');

const Navbar = () => {
    const match = useRouteMatch(`${TIMER_PATH}/:datetime`);
    
    const [isActive, setIsActive] = useState(false);

    const toggleIsActive = () => setIsActive(!isActive);
    
    return (
        <nav className={cx("navbar", match?.isExact ? "is-hidden" : "")}>
            <div className="navbar-brand">
                <a href={HOME_PATH} className="navbar-item">OBS Browser Timer</a>
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