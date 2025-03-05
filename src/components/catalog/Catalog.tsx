import Product from "./ProductSelection";
import style from "./style.module.css";
import allProducts from "../../data/snecears.json";
import Price from "./Price";
import { catalogKros } from "../../types";
import { FC } from "react";

type Props = {
  data: catalogKros;
};

const Catalog: FC<Props> = () => {
  return (
    <main className={style.container}>
      <h2 className={style.title}>Каталог</h2>
      <div className={style.content}>
        <Price />
        <section className={style.container_section}>
          {allProducts.slice(0, 9).map((product) => {
            return (
              <div>
                <Product data={product} />{" "}
              </div>
            );
          })}
          <button className={style.product_btn}>Показать еще</button>
        </section>
      </div>
    </main>
  );
};
export default Catalog;
