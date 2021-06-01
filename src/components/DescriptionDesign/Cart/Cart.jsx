import React from "react";
import Styles from "./Cart.module.css";
import icon from "../../../assets/images/course-icon.svg";

export const Cart = ({ subtitle, text }) => {
  return <div className={Styles.cart}>
      <img src={icon} alt="cart/icon" />
      <p className={Styles.title}><strong>{subtitle.black}</strong> {subtitle.orange}</p>
      <p className={Styles.text}>{text}</p>
  </div>;
};
