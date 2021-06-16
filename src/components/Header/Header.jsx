import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img alt="My Company" src='https://api.freelogodesign.org/assets/thumb/logo/14929696_400.png'/>
        </header>
    );
}

export default Header;