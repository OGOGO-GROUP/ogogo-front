import React from "react";
import Styles from "./DescriptionDesign.module.css";
import { Cart } from "./Cart/Cart";
import whiteGif from "../../assets/images/gif/white.gif";

export const DescriptionDesign = ({ description }) => {
  return (
    <section className={Styles.description}>
      <img src={whiteGif} className={Styles.gif} alt="linear" />
      <img src={whiteGif} className={Styles.gif} alt="linear" />
      <div className="container">
        <p className={Styles.subtitle}>Кому подойдёт курс</p>
        <div className={Styles.wrapper}>
          {description.map((item, i) => (
            <Cart {...item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
