import React from 'react'
import Link from 'next/link'
import Card from '../card/card'
import { data } from '@/app/data/data'
import Styles from './cardslist.module.css'
export default function Cardslist() {
  return (
    <section className={Styles["ListWrapper"]}>
    <section className={Styles["CardsList"]}>
      
    <Card imageLink ="./images/ms-onedrive.svg" name="Microsoft Onedrive"/>
    
    <Card imageLink ="./images/googleworkspace.svg" name="Google Workspace"/>
    <Link href={`./Youtube/page`} className="Linklinks">
    <Card imageLink ="./images/youtube.svg" data={data} name="Youtube"/>
    </Link>
    <Card imageLink ="./images/figma.svg" name="Figma"/>
    <Card imageLink ="./images/github.svg" name="Github"/>
    <Card imageLink ="./images/zoom.svg" name="Zoom"/>
    <Card imageLink ="./images/gmail.svg" name="Gmail"/>
</section>
</section>
  )
}
