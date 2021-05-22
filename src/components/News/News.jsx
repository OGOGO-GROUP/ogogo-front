import React from "react";
import { NavLink } from "react-router-dom";
import { useGet } from "../../hooks/get.hook";
import Styles from "./News.module.css";
import { MONTHS } from "../../constains";

export const News = ({ link }) => {
  const { data, loading } = useGet("news");
  return (
    <div className={Styles.news} ref={link}>
      <div className="container">
        <h3 className={Styles.heading}>
          Новости
          <NavLink to="/news">Все новости:</NavLink>
        </h3>
        <div className={Styles.block}>
          {loading ? (
            <div className="center">
              <div className="loading"></div>
            </div>
          ) : data.results ? (
            data.results
              .slice(0, 4)
              .map(({ image, title, date_created }, i) => {
                return (
                  <NavLink key={i} to={`/news/${2}`}>
                    <div
                      data-aos="fade-right"
                      data-aos-delay={i * 100}
                      className={Styles.item}
                      style={{
                        background: `url(${image}) 0 0 no-repeat`,
                        backgroundSize: "cover",
                      }}
                    >
                      <p>
                        Новости -{" "}
                        {`${new Date(date_created).getDate()}
                                                ${
                                                  MONTHS[
                                                    new Date(
                                                      date_created
                                                    ).getMonth()
                                                  ]
                                                }
                                                ${new Date(
                                                  date_created
                                                ).getFullYear()}`}
                      </p>
                      <h4>{title}</h4>
                    </div>
                  </NavLink>
                );
              })
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
