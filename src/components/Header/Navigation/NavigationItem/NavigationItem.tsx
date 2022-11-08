// CSS
import classes from './NavigationItem.module.css';

// Librairies
import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

// Type
type NavigationItemProps = {
  path: string,
  content: string,
}

export default function NavigationItem({path, content}: NavigationItemProps) {
  return (
    <Link className={classes.navlinks} to={path}>{content}</Link>
  )
}
