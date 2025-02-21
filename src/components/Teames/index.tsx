import style from "./style.module.css";
import allTeames from "../../data/teame.json";
import Teame from "../Teame/Teame";
import elips from "../../../img/Ellipse.png";
import group from "../../../img/Group.png";
const Teames = () => {
  return (
    <div className={style.container}>
      <p className={style.container_header}>Наша команда</p>
      <section>
        {allTeames.map((teame) => {
          return <Teame data={teame} />;
        })}
      </section>
      <img className={style.container_eleps} src={elips} alt="" />
      <img className={style.container_group} src={group} alt="" />
    </div>
  );
};
export default Teames;
