// CSS
import classes from './Home.module.css';

// Librairie
import React, { useState, useEffect } from 'react';
import axios from '../../config/axios-firebase';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';

// Composant
import DisplayedArticles from '../../components/DisplayedArticles/DisplayedArticles';

// Types
type ArticleType = {
    title: string;
    content: string;
    author: string;
    draft: boolean;
    catchPhrase: string;
    date: string;
    key: string;
    slug: string;
}[];

export default function Home() {
    // State
    const [articlesData, setArticlesData] = useState<ArticleType>();

    // UseEffect
    useEffect(() => {
        axios
            .get('/articles.json?orderBy="date"&limitToLast=3')
            .then((response) => {
                let articlesArray = [];

                for (let key in response.data) {
                    articlesArray.push({ ...response.data[key], key: key });
                }

                articlesArray.reverse();

                setArticlesData(articlesArray);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h1>Home</h1>
            <DisplayedArticles articles={articlesData} />
            <Link to={routes.ARTICLES}>Voir tous les articles</Link>
        </>
    );
}
