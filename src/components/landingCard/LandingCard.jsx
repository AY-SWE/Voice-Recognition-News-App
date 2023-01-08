import React from "react";
import css from "./LandingCard.module.css";

const LandingCard = ({cardInfo}) => {
  return (
    <div class={css.container}>
      <div class={css.card}>
        <div class={css.cardBody}>
          <h2>{cardInfo.title}</h2>
          <h3>{cardInfo.title.split(' ')[2]}</h3>
          <span>{cardInfo.info}</span>
        </div>
        <div className={css.cardBodyBottom}>
          <span>Try Saying:</span>
          <span>{cardInfo.text}</span>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
