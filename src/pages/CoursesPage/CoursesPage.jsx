import React from "react";
import { useGet } from "../../hooks/get.hook";
import Styles from "./CoursesPage.module.css";
import "swiper/swiper-bundle.min.css";
import { Cart } from "./Cart/Cart";
import { Form } from "./Form/Form";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination, Navigation]);

export const CoursesPage = () => {
  const { data, loading } = useGet("courses");
  return (
    <div className={Styles.courses} id="courses">
      <div className="container">
        <h3 className={Styles.heading}>Курсы</h3>
        <div className={Styles.wrapper}>
          {loading ? (
            <div className={Styles.progress}>
              <div className="loading"></div>
            </div>
          ) : (
            data.map((item) => <Cart {...item} key={item.id} />)
          )}
        </div>
        <Form />
      </div>
    </div>
  );
};
