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

    // Afficher l'article
    const displayArticleContent = () => {
      
      let titleArticle = '';
      let contentArticle = '';
      let authorArticle = '';

      if(articleData !== undefined) {
        titleArticle = articleData.title;
        contentArticle = articleData.content;
        authorArticle = articleData.author;
      }

        return (
            <div className={classes.articleContainer}>
                <h1>{titleArticle}</h1>
                <p>{contentArticle}</p>
                <small>{authorArticle}</small>
            </div>
        );
    };

    return displayArticleContent()
}
