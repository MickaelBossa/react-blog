// CSS
import classes from './NavigationItem.module.css';

// Librairies
import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

// Type
type NavigationItemProps = PropsWithChildren <{
    path: string;
}>;

export default function NavigationItem({ path, children }: NavigationItemProps) {
    return (
        <li>
            <Link className={classes.navlinks} to={path}>
                {children}
            </Link>
        </li>
    );
}
