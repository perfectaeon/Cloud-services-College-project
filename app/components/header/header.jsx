import React from 'react'
import Link from 'next/link'
import Styles from './header.module.css'
export default function Header() {
  return (
    <div className={Styles['header']}>
    <div className={Styles["headertext"]}>
        <Link href='/' className="Linklinks">  <p>Облачные сервисы</p></Link>  
    </div>
</div>
  )
}
