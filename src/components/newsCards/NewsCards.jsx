import React from "react";
import NewsCard from "../newsCard/NewsCard";
import css from './NewsCards.module.css';

export const NewsCards = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => (
        <NewsCard article={article} i = {i}/>
      ))}
    </div>
  );
};
