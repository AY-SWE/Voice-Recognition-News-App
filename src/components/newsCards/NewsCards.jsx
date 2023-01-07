import React from "react";
import css from "./NewsCards.module.css";
import NewsCard from "../newsCard/NewsCard";
import LandingCard from "../landingCard/LandingCard";

const landingCards = [
  { title: "Latest News" },
  { title: "News By Sources" },
  {title: 'News By Terms'},
  {title: 'News By Categories' },
];

export const NewsCards = ({ articles }) => {
  if (!articles.length) {
    //if no articles, show a landing page
    return (
      <div className={css.container}>
        {landingCards.map((landingCard) => (
          <LandingCard/>
        ))}
      </div>
    );
  }
  return (
    <div className={css.container}>
      {articles.map((article, i) => (
        <NewsCard article={article} i={i} />
      ))}
    </div>
  );
};
