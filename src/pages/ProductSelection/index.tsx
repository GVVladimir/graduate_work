import Header from "../../components/Header/Header";
import Price from "../../components/catalog/Price";
import Product from "../../components/catalog/ProductSelection";
import style from "./style.module.css";
import allProducts from "../../data/snecears.json";
import Footer from "../../components/Footer";

const ProductSelections = () => {
  return (
    <>
      <Header />
      <main className={style.container}>
        <h2 className={style.title}>Каталог</h2>
        <div className={style.content}>
          <Price />
          <section className={style.container_section}>
            {allProducts.map((product) => {
              return (
                <div>
                  <Product data={product} />;
                </div>
              );
            })}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default ProductSelections;
