import VK from "../../../img/VK.png";
import Insta from "../../../img/Insta.png";
import style from "./style.module.css";
import { useState } from "react";

const Contacts = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={style.container_contacts}>
      <h2>Контакты</h2>
      <section className={style.contacts}>
        <h4 onMouseEnter={() => setShow(!show)}>Главный офис</h4>
        <p
          className={style.contacts_Info}
          style={{ display: show ? "block" : "none" }}
        >
          Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке,
          качестве обслуживания и товара просьба задавать в отдел продаж
        </p>
        <p>
          <a href="tel:+7 800 789 89 89">+7 800 789 89 89</a>
        </p>
        <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
      </section>
      <section className={style.contacts}>
        <h4>отдел продаж</h4>
        <p>
          <a href="tel:+7 800 789 89 89">+7 800 789 89 89</a>
        </p>
        <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
      </section>
      <section className={style.container_socialNetwork}>
        <img className={style.contact_img} src={VK} alt="" />
        <img className={style.contact_img} src={Insta} alt="" />
      </section>
    </div>
  );
};

export default Contacts;
