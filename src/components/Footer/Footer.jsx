import React from "react";
import { useImport } from "../../hooks/import.hook";
import Styles from "./Footer.module.css";

import Logo from "../../assets/images/logo.svg";

export const Footer = () => {
  const { importAll } = useImport();
  const icons = importAll(
    require.context("./../../assets/images/social", false, /\.(png|jpe?g|svg)$/)
  );

  const links = [
    {
      icon: icons[0].default,
      label: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=550312312",
    },
    {
      icon: icons[1].default,
      label: "Instagram",
      link: "https://www.instagram.com/ogogo_academy/",
    },
    {
      icon: icons[2].default,
      label: "Telegram",
      link: "https://t.me/Ogogo_Academy",
    },
  ];

  return (
    <footer className={Styles.footer} id="contacts">
      <div className="container">
        <div className={Styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={Styles.block}>
          <div className={Styles.item}>
            <h3>
              г. Бишкек, <br /> ул. Ибраимова 115/1
            </h3>
            <p>Пользовательское соглашение</p>
          </div>
          <div className={Styles.item}>
            <a href="tel:+996550312312">+996 (550) 312-312</a>
            <a href="mailto:ogogoacademy@gmail.com">ogogoacademy@gmail.com</a>
            <p>
              Лицензия на образовательную деятельность № LS200001652 от 03
              декабрь 2021
            </p>
          </div>
          <div className={Styles.item}>
            {links.map(({ icon, label, link }, i) => {
              return (
                <a key={i} href={link} target="_blank" rel="noreferrer">
                  <img src={icon} alt={`social${i}`} />
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
