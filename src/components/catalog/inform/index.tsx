import { FC, useState } from "react";
import { catalogKros } from "../../../types";
import style from "./style.module.css";
import Product from "../ProductSelection";

type Props = {
  data: catalogKros;
};

const InformKart: FC<Props> = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <Product data={data} />
      ) : (
        <div key={data.id} className={style.container} onClick={() => setShow(!show)}>
          <div className={style.container_content}>
            <img className={style.container_img} src={data.imgUrl} alt="" />
            <section className={style.container_description}>
              <article className={style.description_inStock}>
                <p>Артикул {data.vendorСode}</p>
                <p>В наличии {data.inStock}</p>
              </article>
              <article>
                <h4>
                  {data.gender} кросовки {data.title}
                </h4>
              </article>
              <article>
                <p>Выберите размер</p>
                <ul>
                  <li>36</li>
                  <li>37</li>
                  <li>38</li>
                  <li>39</li>
                  <li>40</li>
                </ul>
              </article>
              <article className={style.description_price}>
                <p>{data.price}</p>
                <p>{data.oldPrice}</p>
              </article>
              <button className={style.description_button}>Заказать </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default InformKart;
