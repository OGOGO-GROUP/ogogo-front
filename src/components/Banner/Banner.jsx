import React from "react";
import Styles from "./Banner.module.css";
 
export const Banner = () => {
  return (
    <article className={Styles.banner}>
      <div className="container">
        <div className={Styles.content}>
          <p className={Styles.title}>100% </p>
          <p className={Styles.text}>
            студентов <strong>OGOGO академии</strong>, которые обратились в наш
            центр карьеры, ежегодно выходят на работу по специальности
          </p>
        </div>
      </div>
    </article>
  );
};
