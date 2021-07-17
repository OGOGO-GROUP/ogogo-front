import React, { useState } from "react";
import Styles from "./Form.module.css";
import { usePost } from "../../../../../hooks/post.hook";
import { ModalInfo } from "../../../ModalInfo/ModalInfo";

export const Form = () => {
  const { postHandler } = usePost();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const changeVisible = () => {
    setVisible(true);
    if (error == !false) {
      setVisible(true);
    } else {
      console.log("False");
    }
  };

  const sendRequest = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const data = { name, phone };
    name = "";
    phone = "";
    postHandler(data, "consult/");
  };
  return (
    <form className={Styles.form} onSubmit={sendRequest}>
      <p className={Styles.title}>Получите бесплатную консультацию от нас !</p>
      <div className={Styles.field}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          onChange={() => setError(false)}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Номер телефона"
          onChange={() => setError(false)}
        />
      </div>
      <button className={Styles.btn} onClick={changeVisible}>Получить консультацию</button>
      <ModalInfo setVisible={setVisible} visible={visible} />
    </form>
  );
};
