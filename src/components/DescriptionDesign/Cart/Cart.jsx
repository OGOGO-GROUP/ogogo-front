import React from "react";
import Styles from "./Cart.module.css";
import icon from "../../../assets/images/course-icon.svg";

export const Cart = ({ subtitle, text }) => {
  return (
    <div className={Styles.cart}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM18.707 9.707L11.147 17.267C10.959 17.455 10.705 17.56 10.44 17.56C10.175 17.56 9.92 17.455 9.733 17.267L6.28 13.814C5.889 13.423 5.889 12.791 6.28 12.4C6.671 12.009 7.303 12.009 7.694 12.4L10.44 15.146L17.293 8.293C17.684 7.902 18.316 7.902 18.707 8.293C19.098 8.684 19.098 9.316 18.707 9.707Z"
          fill="#292929"
        />
      </svg>
      <p className={Styles.title}>
        <strong>{subtitle.black}</strong> {subtitle.orange}
      </p>
      <p className={Styles.text}>{text}</p>
    </div>
  );
};
