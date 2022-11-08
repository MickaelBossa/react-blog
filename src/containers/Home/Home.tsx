// CSS
import classes from './Home.module.css';

// Librairie
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to={'/articles/1'}>Voir mon article</Link>
        </>
    );
}
