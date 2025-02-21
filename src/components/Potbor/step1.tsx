import style from "./style.module.css";
import allKeds from "../../data/potbor.json";
import OneKed from "./OneCed";
import { useState } from "react";
import Step2 from "./step2";

const StartStep = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <div id="1" className={style.container}>
          <section className={style.header}>
            <h2>Мы подберем идеальную пару для вас</h2>
            <p>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями
            </p>
            <div className={style.type_ked}>
              <h4>Какой тип кроссовок рассматриваете?</h4>
              <section className={style.cards}>
                {allKeds.map((ked) => {
                  return <OneKed data={ked} />;
                })}
              </section>
            </div>
          </section>
          <footer>
            <p>1 из 3</p>
            <button className={style.btn} onClick={handleClick}>
              Следующий шаг
            </button>
          </footer>
        </div>
      ) : (
        <Step2 />
      )}
    </>
  );
};

export default StartStep;
