// CSS
import classes from './Articles.module.css';

// Librairies
import React, { useState, useEffect } from 'react';
import axios from '../../config/axios-firebase';

// Composant
import DisplayedArticles from '../../components/DisplayedArticles/DisplayedArticles';

export default function Articles() {

    // State

    
    // UseEffect
    useEffect(() => {
      axios.get('/articles.json')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }, [])

    return (
        <>
            <h1>Articles</h1>
            <DisplayedArticles />
        </>
    );
}
