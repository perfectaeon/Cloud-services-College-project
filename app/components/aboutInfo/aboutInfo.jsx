import React from 'react'
import Styles from "./aboutInfo.module.css"
export default function AboutInfo() {
  return (
    <section className={Styles["mainText"]}>
        <section className={Styles["about-info"]}>
            <span>Этот веб-сайт разработан студентом Колледжа ОмГТУ в качестве продукта индивидуального проекта</span>
            
            <span>Здесь вы увидите облачные сервисы, которыми все мы пользуемся изо дня в день.</span>

        </section>
    </section>
  )
}
