import React from 'react';
const cx = require('classnames');

type NavbarBurgerType = {
    isActive: boolean,
    toggleIsActive: () => void
}

const NavbarBurger = (props: NavbarBurgerType) => {
    return (
        <button type="button"
            onClick={props.toggleIsActive}
            className={cx("navbar-burger", props.isActive ? "is-active" : "")}
            aria-label="menu"
            aria-expanded="false"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    );
};


export default NavbarBurger;