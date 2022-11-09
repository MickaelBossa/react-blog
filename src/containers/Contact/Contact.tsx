// CSS
import classes from './Contact.module.css';

// Librairie
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import routes from '../../config/routes';

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <p>Par quel moyen de contact souhaitez-vous échanger ?</p>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? classes.contactBtn + ' ' + classes.active
                        : classes.contactBtn
                }
                to='email'
            >
                Email
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? classes.contactBtn + ' ' + classes.active
                        : classes.contactBtn
                }
                to='phone'
            >
                Téléphone
            </NavLink>
            <Outlet />
        </>
    );
}
