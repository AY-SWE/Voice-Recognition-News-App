import React from "react";
import NewsCard from "../newsCard/NewsCard";
export const NewsCards = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => (
        <NewsCard article={article} i = {i}/>
      ))}
    </div>
  );
};
