
import style from "./style.module.css";

const Heading = () => {
  return (
    <span className={style.heading}>
      <h1 className={style.heading_h1}>
        Кроссовки известных брендов с доставкой по России и СНГ
      </h1>
      <p className={style.heading_text}>
        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
        многие другие по низким ценам
      </p>
     
      <a>
        <button className={style.heading_btn}>Перейти к покупкам</button>
      </a>
    
    </span>
    
  );
};

export default Heading;
