import React from "react";
import css from "./NewsCard.module.css";
const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  return (
    <div class={css.container}>
      <div class={css.card}>
        <div class={css.cardHeader}>
          <img src={urlToImage} alt="" />
        </div>

        <div class={css.cardBody}>
          <span>{source.name}</span>
          <span>{title}</span>
          <span>{description}</span>
          <span>{new Date(publishedAt).toDateString()}</span>
          <div className={css.cardBodyFooter}>
            <a href={url}>
              <button>Read More</button>
            </a>
            <h2>{i+1}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
