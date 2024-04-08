import { data } from "../data/data"
let MObj = data.find((el) => el.id == 6);
import Styles from "../pages.module.css"
export default function ZoomPage() {
    return (
        <div className={Styles["mainContent"]}>
        <div className={Styles["bigSpace"]}>
            <h1>{MObj.name}</h1>
            <p>{MObj.mainText}</p>
        </div>
        <div className={Styles["smallSpace"]}>
            <img src={MObj.imageLink} className={Styles["serviceImage"]}></img>
                        <div className={Styles["tags"]}>
            <h4>Сервис:  {MObj.name}</h4>
            <h4>Компания:  {MObj.company}</h4>
            <h4>Год создания:  {MObj.released}</h4>
            <h4>Тип сервиса:  {MObj.type}</h4>
                        </div>
        </div>
        </div>
    )
}