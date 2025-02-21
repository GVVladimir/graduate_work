import style from "./style.module.css";
import insta from "../../../img/Instagram.png";
import foto1 from "../../../img/Rectangle1.png";
import foto2 from "../../../img/Rectangle2.png";
import foto3 from "../../../img/Rectangle3.png";
import foto4 from "../../../img/Rectangle1.png";
import foto5 from "../../../img/Rectangle2.png";

const HaveQuestion = () => {
  return (
    <div className={style.container}>
      <section className={style.form}>
        <h2 className={style.header}>Есть вопросы?</h2>
        <h4 className={style.text}>
          Заполните форму и наш менеджер свяжется с вами
        </h4>
        <form className={style.form_input} action="" method="get">
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Номер телефона" />
          <input className={style.button} type="submit" value="Отравить" />
        </form>
      </section>
      <section>
        <h2 className={style.logo_insta}>
          <img src={insta} alt="" />
        </h2>
        <article className={style.foto}>
          <section >
            <img className={style.foto_img} src={foto1} alt="" />
            <img src={foto2} alt="" />
          </section>
          <img  src={foto3} alt="" />
          <section >
            <img className={style.foto_img} src={foto4} alt="" />
            <img src={foto5} alt="" />
          </section>
        </article>
      </section>
    </div>
  );
};
export default HaveQuestion;
