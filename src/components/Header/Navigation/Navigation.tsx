// CSS
import classes from './Navigation.module.css';

// Librairie
import React from 'react';
import routes from '../../../config/routes';
// Composant
import NavigationItem from './NavigationItem/NavigationItem';

export default function Navigation() {
    return (
        <nav>
            <ul className={classes.navbarList}>
                <NavigationItem path={routes.HOME}>Accueil</NavigationItem>
                <NavigationItem path={routes.ARTICLES}>Articles</NavigationItem>
                <NavigationItem path={routes.CONTACT}>Contact</NavigationItem>
                <NavigationItem path={routes.ADDARTICLE}>Ajouter</NavigationItem>
            </ul>
        </nav>
    );
}
