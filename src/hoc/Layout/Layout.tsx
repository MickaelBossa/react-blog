// CSS
import classes from './Layout.module.css';

// Librairies
import React from 'react';
import { Outlet } from 'react-router-dom';

// Composants
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Layout() {
    return (
        <div className={classes.layoutContainer}>
            <Header />
            <div className={classes.layoutContent}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
