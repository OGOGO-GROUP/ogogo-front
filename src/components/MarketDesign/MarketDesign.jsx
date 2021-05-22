import React from "react";
import Styles from "./MarketDesign.module.css";
import linearOne from "../../assets/images/linear/linear-1.png";
import linearTwo from "../../assets/images/linear/linear-2.png";

export const MarketDesign = ({ title, btns }) => {
  return (
    <article className={Styles.market}>
      <img src={linearOne} className={Styles.linearOne} alt="linear" />
      <img src={linearTwo} className={Styles.linearTwo} alt="linear" />
      <div className="container">
        <div className={Styles.wrapper}>
          <div className={Styles.content}>
            <h4>
              <span>{title}</span> востребованы на рынке
            </h4>
            <p>
              Источник данных: <span>HeadHunter</span>
            </p>
          </div>
          <div className={Styles.box}>
            <div className={Styles.btns}>
              {btns.one && <button className={Styles.active}>Без опыта</button>}
              {btns.two && <button>С опытом от года</button>}
            </div>
            <div className={Styles.border}>
              <div className={Styles.description}>
                <p className={Styles.subtitle}>40 000 сом</p>
                <p className={Styles.text}>Зарплата в месяц</p>
              </div>
              <div className={Styles.description}>
                <p className={Styles.subtitle}>5% от всех</p>
                <p className={Styles.text}>Доступных вакансий на hh.ru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
