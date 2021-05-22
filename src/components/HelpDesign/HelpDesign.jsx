import React from "react";
import Styles from "./HelpDesign.module.css";
import { Cart } from "./Cart/Cart";
import linearOne from "../../assets/images/linear/linear-3.png";
import linearTwo from "../../assets/images/linear/linear-4.png";

export const HelpDesign = ({ title, article }) => {
  return (
    <article className={Styles.help}>
      <img src={linearOne} className={Styles.linearOne} alt="linear" />
      <img src={linearTwo} className={Styles.linearTwo} alt="linear" />
      <div className="container">
        <p className={Styles.title}>
          Стань <span>{title}</span>
        </p>
        <div className={Styles.wrapper}>
          {article.map((item, i) => <Cart key={i} {...item} />)}
        </div>
      </div>
    </article>
  );
};
