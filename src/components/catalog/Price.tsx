import style from "./style.module.css";

const Price = () => {
  return (
    <div className={style.price_container}>
      <section className={style.price_content}>
        <h2 className={style.price_header}>
          Подбор <br /> по параметрам
        </h2>
        <article>
          <h4>Цена, руб</h4>
        </article>
        <article>
          <h4>Пол</h4>
          <section className={style.price_gender}>
            <input
              className={style.price_gender_input}
              type="checkbox"
              checked
            />
            Мужской
            <input className={style.price_gender_input} type="checkbox" />
            Женский
          </section>
        </article>
      </section>
    </div>
  );
};

export default Price;
