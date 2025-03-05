import CatlogPriceFilter from "./slider";
import style from "./style.module.css";
// import Chek from "../../../img/check.png";
// import VectorChek from "../../../img/VectorChek.png";
import { useState } from "react";

const Price = () => {
  const [isShow, setIsShow] = useState({});

  return (
    <div className={style.price_container}>
      <section className={style.price_content}>
        <h2 className={style.price_header}>
          Подбор <br /> по параметрам
        </h2>
        <article>
          <h4 className={style.price_content_text}>Цена, руб</h4>
          <CatlogPriceFilter />
      
        </article>
        <article>
          <h4 className={style.price_content_text}>Пол</h4>
          <section className={style.price_gender}>
            <input
              className={style.price_gender_input}
              type="checkbox"
              onChange={() => setIsShow(!isShow)}
            />
            Мужской
            <input
              className={style.price_gender_input}
              type="checkbox"
              onChange={() => setIsShow(!isShow)}
            />
            Женский
          </section>
        </article>
        <article>
          <h4 className={style.price_content_text}>Размез</h4>
          <table>
            <tr>
              <td className={style.table_size}>35</td>
              <td className={style.table_size}>36</td>
              <td className={style.table_size}>37</td>
            </tr>
            <tr>
              <td className={style.table_size}>39</td>
              <td className={style.table_size}>38</td>
              <td className={style.table_size}>40</td>
            </tr>
            <tr>
              <td className={style.table_size}>41</td>
              <td className={style.table_size}>42</td>
              <td className={style.table_size}>43</td>
            </tr>
          </table>
        </article>
        <button className={style.price_content_apply}>Применить</button>
        <button className={style.price_content_throw}>Сбросить</button>
      </section>
    </div>
  );
};

export default Price;
