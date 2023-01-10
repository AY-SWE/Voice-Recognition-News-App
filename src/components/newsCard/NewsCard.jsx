import React from "react";
import css from "./NewsCard.module.css";
const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticles,
}) => {
  return (
    <div className={css.container}>
      <div className={activeArticles === i ? css.cardActive : css.card}>
        <div className={css.cardHeader}>
          <img src={urlToImage} alt="" />
        </div>

        <div className={css.cardBody}>
          <div className={css.cardBodyHeader}>
            <span>{new Date(publishedAt).toDateString()}</span>
            <div className={css.sourceNameContainer}>
              <span>{source.name}</span>
            </div>
          </div>
          <span>{title}</span>
          <span>{description}</span>

          <div className={css.cardBodyFooter}>
            <a href={url}>
              <button>Read More</button>
            </a>
            <h2>{i + 1}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
