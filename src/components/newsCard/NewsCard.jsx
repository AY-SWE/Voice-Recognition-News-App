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

        <div class="card-body">
          <span class="tag tag-teal">Technology</span>
          <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
          <p>An exploration into the truck's polarising design</p>
          <div class="user">
            <div class="user-info">
              <h5>July Dec</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
