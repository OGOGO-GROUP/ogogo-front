import React from "react";
import { useHistory } from "react-router-dom";
import Styles from "./Cart.module.css";

export const Cart = ({ title, image, short_description }) => {
  const history = useHistory();
  const showCourse = () => {
    history.push("/courses/" + title);
  };
  return (
    <div className={Styles.slide} onClick={showCourse}>
      <img src={image} alt={title} />
      <div className={Styles.desc}>
        <h4>{title}</h4>
        <p>{short_description}</p>
      </div>
    </div>
  );
};
