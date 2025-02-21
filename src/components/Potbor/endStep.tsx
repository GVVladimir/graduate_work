import { useState } from "react";
import style from "./style.module.css";
import StartStep from "./step1";

const EndStep = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <div id="4" className={style.container}>
          <section className={style.header}>
            <h2>Ваша подборка готова!</h2>
            <p>
              Оставьте свои контактные данные, чтобы бы мы могли отправить
              подготовленный для вас каталог
            </p>
            <div className={style.type_endStep}>
              <section className={style.endStep_blok}>
                <h2>Получить предложение</h2>
                <p>Получите подборку подходящих для вас моделей на почту</p>
                <input
                  className={style.endStep_input}
                  type="text"
                  placeholder="Ваше имя"
                />
                <input
                  className={style.endStep_input}
                  type="email"
                  placeholder="E-mail"
                />
                <button onClick={handleClick}>Получить</button>
              </section>
            </div>
          </section>
          <footer></footer>
        </div>
      ) : (
        <StartStep />
      )}
    </>
  );
};

export default EndStep;
