import { YMaps, Map } from '@pbe/react-yandex-maps';

type Props={
    center:namber,
    zoom: namber
}

const Map =() => {
    return(
     <YMaps>
 <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
     </YMaps>
    )
}
export default Map