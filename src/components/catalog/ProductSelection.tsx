import { FC, useState } from "react";
import { catalogKros } from "../../types";
import style from "./style.module.css";
import InformKart from "./inform";

type Props = {
  data: catalogKros;
};

const Product: FC<Props> = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (
        <InformKart data={data} />
      ) : (
        <div key={data.id} className={style.container_prod} onClick={() => setShow(!show)}>
          <img className={style.container_img} src={data.imgUrl} alt="" />
          <h2>{data.title}</h2>
          <p>{data.price}</p>
        </div>
      )}
    </>
  );
};

export default Product;
