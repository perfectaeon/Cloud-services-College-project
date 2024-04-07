import React from 'react'
import Styles from "./aboutInfo.module.css"
export default function AboutInfo() {
  return (
    <section className={Styles["mainText"]}>
        <section className={Styles["about-info"]}>
        <span>Облачными сервисами мы пользуемся каждый день</span>
            <section className={Styles["SvgIcons"]}>
        <img className={Styles["about-img"]} src="cloud-network-icon.svg" alt="Облачные вычисления" />
        <img className={Styles["about-img"]} src="cloud-hosting-server-icon.svg" alt="Облачные вычисления" />
        <img className={Styles["about-img"]} src="cloud-protection-security-icon.svg" alt="Облачные вычисления" />
        </section>

        </section>
        <p className={Styles["about-info"]}> Всё об облачных сервисах:</p>
    </section>
  )
}
