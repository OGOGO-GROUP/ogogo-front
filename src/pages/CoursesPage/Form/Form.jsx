import React, { useState } from "react";
import Styles from "./Form.module.css";
import { usePost } from "../../../hooks/post.hook";
import { ModalInfo } from "../../../components/common/ModalInfo/ModalInfo";

export const Form = () => {
  const { postHandler } = usePost();
  const [visible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible(true);
  };

  const notActiveClass = Styles.notActive
  const sendRequest = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    postHandler({ phone, name }, "consult/");
    e.target.reset();
    e.target.classList.add(notActiveClass)
  };
  return (
    <form className={Styles.form} onSubmit={sendRequest}>
      <p className={Styles.title}>
        Записаться на курсы в <span>OGOGO</span>
      </p>
      <div className={Styles.field}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Номер телефона"
          required
        />
        <span className={Styles.massage}>Заявка уже подана!</span>
      </div>
      <button className={Styles.btn} onClick={changeVisible}>Отправить</button>
      <ModalInfo setVisible={setVisible} visible={visible} />
    </form>
  );
};
