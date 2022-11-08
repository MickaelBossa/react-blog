// CSS
import classes from './Header.module.css';

// Librairies
import React from 'react';

// Composants
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';

export default function Header() {
    return (
        <header className={classes.headerContainer}>
            <Logo />
            <Navigation />
        </header>
    );
}
