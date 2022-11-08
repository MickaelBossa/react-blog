// CSS
import classes from './Navigation.module.css';

// Librairie
import React from 'react';

// Composant
import NavigationItem from './NavigationItem/NavigationItem';

export default function Navigation() {
    return (
        <nav>
            <ul className={classes.navbarList}>
                <NavigationItem path={'/'}>Accueil</NavigationItem>
                <NavigationItem path={'/articles'}>Articles</NavigationItem>
                <NavigationItem path={'/contact'}>Contact</NavigationItem>
            </ul>
        </nav>
    );
}
