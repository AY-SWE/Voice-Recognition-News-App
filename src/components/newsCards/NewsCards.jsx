import React from "react";
import css from "./NewsCards.module.css";
import NewsCard from "../newsCard/NewsCard";
import LandingCard from "../landingCard/LandingCard";

const landingCards = [
  { title: "Latest News", text: "Get me the latest news"},
  { title: "News By Sources", info:'CNN, BCC News, New York Times, NBC News, Fox News', text: "Give me the news from CNN"},
  {title: 'News By Terms', info:'ChatGPT, Stocks, Supernatural, Anime', text: "Say any terms desired" },
  {title: 'News By Categories', info:'business, entertainment, general, health, science, sports, technology', text: "Give me the recent sports highlights"  },
];

export const NewsCards = ({ articles }) => {
  if (!articles.length) {
    //if no articles, show a landing page
    return (
      <div className={css.container}>
        {landingCards.map((landingCard) => (
          <LandingCard cardInfo ={landingCard}/>
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
