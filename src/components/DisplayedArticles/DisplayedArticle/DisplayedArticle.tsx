// CSS
import classes from './DisplayedArticle.module.css';

// Librairie
import React from 'react'

export default function DisplayedArticle({title, catchPhrase, author}: {title: string, catchPhrase: string, author: string}) {
  return (
    <div className={classes.articleCard}>
      <h2 className={classes.articleTitle}>{title}</h2>
      <p className={classes.articleCatchPhrase}>{catchPhrase}</p>
      <small>{author}</small>
    </div>
  )
}
