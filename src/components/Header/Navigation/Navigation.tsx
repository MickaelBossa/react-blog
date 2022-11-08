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
                <li>
                    <NavigationItem path={'/'} content={'Accueil'} />
                </li>
                <li>
                    <NavigationItem path={'/articles'} content={'Articles'} />
                </li>
                <li>
                    <NavigationItem path={'/contact'} content={'Contact'} />
                </li>
            </ul>
        </nav>
    );
}
