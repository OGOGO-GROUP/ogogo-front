import React from "react";
import Styles from "./DescriptionDesign.module.css";
import { Cart } from "./Cart/Cart";
import linearOne from "../../assets/images/linear/linear-3.png";
import linearTwo from "../../assets/images/linear/linear-4.png";

export const DescriptionDesign = ({ description }) => {
  return (
    <section className={Styles.description}>
      <img src={linearOne} className={Styles.linearOne} alt="linear" />
      <img src={linearTwo} className={Styles.linearTwo} alt="linear" />
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
