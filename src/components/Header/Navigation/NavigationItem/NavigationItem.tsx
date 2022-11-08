// CSS
import classes from './NavigationItem.module.css';

// Librairies
import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

// Type
type NavigationItemProps = PropsWithChildren<{
    path: string;
}>;

export default function NavigationItem({
    path,
    children,
}: NavigationItemProps) {
    return (
        <li>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? classes.navlinks + ' ' + classes.active
                        : classes.navlinks
                }
                to={path}
            >
                {children}
            </NavLink>
        </li>
    );
}
