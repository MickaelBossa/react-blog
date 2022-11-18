// CSS
import classes from './Articles.module.css';

// Librairies
import React, { useState, useEffect } from 'react';
import axios from '../../config/axios-firebase';

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
}[]

export default function Articles() {

    // State
      const [articlesData, setArticlesData] = useState<ArticleType>();
 
    // UseEffect
    useEffect(() => {
      axios.get('/articles.json')
        .then(response => {
          let articlesArray = [];

          for(let key in response.data) {
            articlesArray.push({...response.data[key], key:key})
          }

          articlesArray.reverse();

          setArticlesData(articlesArray);
          
        })
        .catch(error => {
          console.log(error);
        })
    }, [])

    return (
        <>
            <h1>Articles</h1>
            <DisplayedArticles articles={articlesData} />
        </>
    );
}
