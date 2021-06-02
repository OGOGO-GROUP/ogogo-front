import React from "react";
import Styles from "./DescriptionDesign.module.css";
import { Cart } from "./Cart/Cart";

export const DescriptionDesign = ({ description }) => {
  return (
    <section className={Styles.description}>
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
