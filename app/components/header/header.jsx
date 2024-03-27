import React from 'react'
import Styles from './header.module.css'
export default function Header() {
  return (
    <div className={Styles['header']}>
    <div className={Styles["headertext"]}>
            <p>Облачные сервисы</p>
    </div>
</div>
  )
}
