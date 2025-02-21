import style from "./style.module.css";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={style.container}>
      <section>
        <h2>SneakMax</h2>
      </section>
      <section className={style.nav}>
        <Link to="/">Каталог</Link>
        <Link to="/AboutUs">О нас</Link>
        <Link to="/ProductSelection">Подбор товара</Link>
        <Link to="/OurTeam">Наша команда</Link>
        <a>Доставка и оплата</a>
        <a>Контакты</a>
        <a>Корзина</a>
      </section>
    </footer>
  );
};
export default Footer;
