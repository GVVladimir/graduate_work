import { FC } from "react";
import { shoeSelection } from "../../../types";
import style from "./style.module.css";

type Props = {
  data: shoeSelection;
};

const OneKed: FC<Props> = ({ data }) => {
  return (
    <div className={style.oneKed}>
      <img src={data.imgUrl} alt="" />
      <section className={style.text}>
        <input type="checkbox" />
        <p>{data.name}</p>
      </section>
    </div>
  );
};

export default OneKed;
