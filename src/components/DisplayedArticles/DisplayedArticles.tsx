// CSS
import classes from './DisplayedArticles.module.css';

// Librairie
import React from 'react';

// Composant
import DisplayedArticle from './DisplayedArticle/DisplayedArticle';

// Types
type ArticleType = {
    title: string;
    content: string;
    author: string;
    draft: boolean;
    catchPhrase: string;
    date: string;
    key: string;
}[];

export default function DisplayedArticles({
    articles,
}: {
    articles: ArticleType | undefined;
}) {
    console.log(articles);

    return (
        <section className={classes.articlesContainer}>
            {articles?.map((article) => (
                <DisplayedArticle
                    title={article.title}
                    catchPhrase={article.catchPhrase}
                    author={article.author}
                    key={article.key}
                />
            ))}
        </section>
    );
}
