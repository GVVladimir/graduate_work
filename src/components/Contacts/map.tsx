import style from "./style.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const ComponentMap = () => (
  <YMaps>
    <Map
      className={style.map}
      defaultState={{ center: [59.938784, 30.314997], zoom: 11 }}
    >
      <Placemark geometry={[59.938784, 30.314997]} />
      <Placemark geometry={[59.93479, 30.335712]} />
    </Map>
  </YMaps>
);

export default ComponentMap;
