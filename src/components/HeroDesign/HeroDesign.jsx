import React, { useState } from "react";
import Styles from "./HeroDesign.module.css";
import { Cart } from "./Cart/Cart";
import linearOne from "../../assets/images/linear/linear-1.png";
import linearTwo from "../../assets/images/linear/linear-2.png";
import { Modal } from "../Modal/Modal";
import { useGet } from "../../hooks/get.hook";

export const HeroDesign = ({ subtitle, title, description, background }) => {
  const { data } = useGet("courses");

  const [modal, setModal] = useState({
    opened: false,
    on: "",
    select: "",
  });

  const openModal = (course, on) => {
    setModal({
      opened: true,
      on: on,
      course: course,
    });
  };

  return (
    <section className={Styles.hero}>
      <img src={linearOne} className={Styles.linearOne} alt="linear" />
      <img src={linearTwo} className={Styles.linearTwo} alt="linear" />
      <div className="container">
        <div className={Styles.wrapper}>
          <div className={Styles.content}>
            <h1>
              Курс по <br /> <span>{title}</span>
            </h1>
            <p>{subtitle}</p>
            <button onClick={() => openModal(title, true)}>Записаться</button>
          </div>
          <img src={background} className={Styles.bg} alt="bg" />
        </div>
        <div className={Styles.carts}>
          {description.map((item, i) => (
            <Cart text={item} key={i} />
          ))}
        </div>
      </div>
      {modal.opened === true ? (
        <Modal modal={modal} setModal={setModal} />
      ) : null}
    </section>
  );
};
