// CSS
import classes from './Article.module.css';

// Librairies
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../config/axios-firebase';

// Type
type DisplayArticleContentType = {
  title: string;
  content: string;
  author: string;
}

export default function Article() {
    // State
    const [articleData, setArticleData] = useState<DisplayArticleContentType | undefined>();

    // Récupère le slug
    const articleId = useParams().id;

    // Récupère l'article depuis firebase
    useEffect(() => {
        axios
            .get(`/articles.json?orderBy="slug"&equalTo="${articleId}"`)
            .then((response) => {
                for (let key in response.data) {
                    setArticleData(response.data[key]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <div className={classes.articleContainer}>
        <h1>{articleData?.title}</h1>
        <p>{articleData?.content}</p>
        <small>{articleData?.author}</small>
    </div>
    )
}
