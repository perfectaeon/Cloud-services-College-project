import React from 'react'
// import NetworkIcon from './images/servicesimages/cloud-network-icon.svg'
import Styles from "./aboutInfo.module.css"
export default function AboutInfo() {
  return (
    <section className={Styles["mainText"]}>
        <section className={Styles["about-info"]}>
        <span>Облачными сервисами мы пользуемся каждый день</span>
            <section className={Styles["SvgIcons"]}>
        <img className={Styles["about-img"]} src='./images/cloud-network-icon.svg' alt="Облачные вычисления" />
        <img className={Styles["about-img"]} src="./images/cloud-hosting-server-icon.svg" alt="Облачные вычисления" />
        <img className={Styles["about-img"]} src="./images/cloud-protection-security-icon.svg" alt="Облачные вычисления" />
        </section>

        </section>
        <p className={Styles["about-info"]}> Всё об облачных сервисах:</p>
    </section>
  )
}
