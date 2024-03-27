import React from 'react'
import Styles from './card.module.css'
export default function Card(props) {
  return (
    <div className={Styles["Card"]}>
               <img src={props.imageLink}/>
               <h4>{props.name}</h4> 
    </div>
  )
}
