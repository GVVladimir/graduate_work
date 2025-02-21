
import Logo from "../Logo/logo";
import Nav from "../Nav";
import style from "./style.module.css";

const Head = () => {
  return (
    <head className={style.head}>
      <Logo />
      <Nav />   
    </head>
  );
};

export default Head;
