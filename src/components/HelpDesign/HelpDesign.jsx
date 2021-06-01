import React from "react";
import Styles from "./HelpDesign.module.css";
import { Cart } from "./Cart/Cart";
import whiteGif from "../../assets/images/gif/white.gif";

export const HelpDesign = ({ title, article }) => {
  return (
    <article className={Styles.help}>
      <img src={whiteGif} className={Styles.gif} alt="linear" />
      <div className="container">
        <p className={Styles.title}>
        <strong>Стань</strong> {title}
        </p>
        <div className={Styles.wrapper}>
          {article.map((item, i) => <Cart key={i} {...item} />)}
        </div>
      </div>
    </article>
  );
};
