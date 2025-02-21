import { FC } from "react";
import { TTeame } from "../../types";
import style from "./style.module.css";

type Props = {
  data: TTeame;
};

const Teame: FC<Props> = ({ data }) => {
  return (
    <div className={style.team}>
      <img src={data.imgUrl} alt="" />
      <h2>{data.name}</h2>
      <p>{data.role}</p>
    </div>
  );
};

export default Teame;
