// CSS
import classes from './DisplayedArticle.module.css';

// Librairie
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';

export default function DisplayedArticle({
    title,
    catchPhrase,
    author,
    slug,
}: {
    title: string;
    catchPhrase: string;
    author: string;
    slug: string;
}) {
    return (
        <Link to={'/' + routes.ARTICLES + `/${slug}`}>
            <div className={classes.articleCard}>
                <h2 className={classes.articleTitle}>{title}</h2>
                <p className={classes.articleCatchPhrase}>{catchPhrase}</p>
                <small>{author}</small>
            </div>
        </Link>
    );
}
