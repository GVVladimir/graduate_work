import style from "./style.module.css";
import ked from "../../../img/air_ced.jpeg";
import { useState } from "react";
import Step3 from "./step3";

const Step2 = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <div id="2" className={style.container}>
          <section className={style.header}>
            <h2>Мы подберем идеальную пару для вас</h2>
            <p>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями
            </p>
            <div className={style.type_ked}>
              <h4>Какой размер вам подойдет?</h4>
              <div className={style.type_ked_size}>
                <section>
                  <input type="checkbox" />
                  <p>менее 36</p>
                </section>
                <section>
                  <input type="checkbox" />
                  <p>36-38</p>
                </section>
                <section>
                  <input type="checkbox" />
                  <p>39-41</p>
                </section>
                <section>
                  <input type="checkbox" />
                  <p>42-44</p>
                </section>
                <section>
                  <input type="checkbox" />
                  <p>45 и больше</p>
                </section>
              </div>
              <img className={style.type_ked_img} src={ked} alt="foto" />
            </div>
          </section>
          <footer>
            <p>2 из 3</p>
            <button onClick={handleClick}>Следующий шаг</button>
          </footer>
        </div>
      ) : (
        <Step3 />
      )}
    </>
  );
};

export default Step2;
