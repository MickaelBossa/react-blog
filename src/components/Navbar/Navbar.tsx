// CSS
import classes from './Navbar.module.css';

// Librairies
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <ul className={classes.navbar}>
                        <li>
                            <Link className={classes.navlink} to={'/'}>
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link className={classes.navlink} to={'/articles'}>
                                Articles
                            </Link>
                        </li>
                        <li>
                            <Link className={classes.navlink} to={'/contact'}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
