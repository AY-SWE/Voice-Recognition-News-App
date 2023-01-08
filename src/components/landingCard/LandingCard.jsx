import React from "react";
import css from "./LandingCard.module.css";

const LandingCard = ({cardInfo}) => {
  return (
    <div class={css.container}>
      <div class={css.card}>
        <div class={css.cardBody}>
          <h2>{cardInfo.title}</h2>
          <span>{cardInfo.title.split(' ')[2]}</span>
          <span>{cardInfo.info}</span>
          <span>Try Saying: <br /> {cardInfo.text}</span>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
