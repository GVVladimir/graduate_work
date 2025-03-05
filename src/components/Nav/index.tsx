import { Link } from 'react-router-dom'
import style from './style.module.css'
import vector from '../../../img/Vector.png'
const Nav = () => {
    return(
<nav className={style.nav}>
    <Link to="/">Каталог</Link>
    <Link to="/AboutUs">О нас</Link>
    <Link to="/ProductSelection">Подбор товара</Link>
    <Link to="/OurTeam">Наша команда</Link>
    <a>Доставка и оплата</a>
    <Link to="/Contacts">Контакты</Link>
    <a>Корзина</a>
    <a><img src={vector} alt="" /></a>
  
</nav>
    )
}
export default Nav