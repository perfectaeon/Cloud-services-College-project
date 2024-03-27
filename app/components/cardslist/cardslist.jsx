import React from 'react'
import Card from '../card/card'
import Styles from './cardslist.module.css'
export default function Cardslist() {
  return (
    <section className={Styles["ListWrapper"]}>
    <section className={Styles["CardsList"]}>
    <Card imageLink ="" name="Microsoft Onedrive"/>
    <Card imageLink ="" name="Google Workspace"/>
    <Card imageLink ="" name="Youtube"/>
    <Card imageLink ="" name="Figma"/>
    <Card imageLink ="" name="Github"/>
    <Card imageLink ="" name="Zoom"/>
</section>
</section>
  )
}
