import { FC } from "react";
import { catalogKros } from "../../types";
import style from "./style.module.css";

type Props = {
  data: catalogKros;
};

const Product: FC<Props> = ({ data }) => {
  return (
    <div className={style.container_prod}>
      <img className={style.container_img} src={data.imgUrl} alt="" />
      <h2>{data.title}</h2>
      <p>{data.price}</p>
    </div>
  );
};

export default Product;
