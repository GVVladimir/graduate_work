import Line from '../../../img/Line.png'
import Mask from '../../../img/MaskGroup.png'
import style from './style.module.css'
const UsAbout = () => {
    return(
        <div className={style.body}>
 <aside className={style.contianer}>
   <section className={style.about_section}>
            <h2>Пара слов о нас</h2>
            <p>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. </p>
            <footer><cite><img src={Line} alt="" />SneakMax</cite></footer>
        </section>
        <section >
            <img className={style.mask_img} src={Mask} alt="" />
        </section>
        </aside>
    
        </div>
        
       
    )
}

export default UsAbout