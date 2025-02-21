import { useState } from "react";
import style from "./style.module.css";
import EndStep from "./endStep";

const Step3 = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? 
        <div id="3" className={style.container}>
          <section className={style.header}>
            <h2>Мы подберем идеальную пару для вас</h2>
            <p>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями
            </p>
            <div className={style.type_ked_comments}>
              <h4>Уточните какие-либо моменты</h4>
              <textarea
                name=""
                id=""
                placeholder="Введите сообщение"
              ></textarea>
            </div>
          </section>
          <footer>
            <p>3 из 3</p>
            <button onClick={handleClick}>Следующий шаг</button>
          </footer>
        </div>
       : 
        <EndStep/>
      }
    </>
  );
};

export default Step3;
