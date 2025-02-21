import FonHeader from "../FonHeader/fonHeader";
import Head from "../Head/Head";
import Heading from "../Heading/Heading";
import style from "./style.module.css";

const Header = () => {
  return (
    <div className={style.body}>
      <header className={style.header}>
        <Head />
        <Heading />
        <FonHeader />
      </header>
    </div>
  );
};

export default Header;
