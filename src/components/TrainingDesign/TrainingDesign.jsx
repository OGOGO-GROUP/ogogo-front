import Styles from "./TrainingDesign.module.css";
import React from "react";
import { Form } from "./Form/Form";
import linearOne from "../../assets/images/linear/linear-2.png";
import linearTwo from "../../assets/images/linear/linear-4.png";

export const TrainingDesign = ({ title, text, courses }) => {
  return (
    <section className={Styles.training}>
      <img src={linearOne} className={Styles.linearOne} alt="linear" />
      <img src={linearTwo} className={Styles.linearTwo} alt="linear" />
      <div className="container">
        <p className={Styles.title}>Программа обучения</p>
        <hr />
        <div className={Styles.wrapper}>
          <div className={Styles.description}>
            <p className={Styles.subtitle}>
              Основы <span>{title}</span>. Погружение в профессию
            </p>
            <p className={Styles.text}>{text}</p>
          </div>
          <div className={Styles.courses}>
            <p className={Styles.subtitle}>Курсы</p>
            <ul className={Styles.list}>
              {courses.map((item, i) => (
                <li className={Styles.item} key={i}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};
