import React from "react";
import Styles from "./Cart.module.css";
import icon from "../../../assets/images/course-icon.svg";

export const Cart = ({ subtitle, text }) => {
  return <div className={Styles.cart}>
      <img src={icon} alt="cart/icon" />
      <p className={Styles.title}>{subtitle.black} <span>{subtitle.orange}</span></p>
      <p className={Styles.text}>{text}</p>
  </div>;
};
