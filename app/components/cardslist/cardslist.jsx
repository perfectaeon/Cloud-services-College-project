import React from 'react'
import Link from 'next/link'
import Card from '../card/card'
import { data } from '@/app/data/data'
import Styles from './cardslist.module.css'
export default function Cardslist() {
  return (
    <section className={Styles["ListWrapper"]}>
    <section className={Styles["CardsList"]}>
      
    <Card imageLink ="./images/servicesimages/ms-onedrive.svg" name="Microsoft Onedrive"/>
    
    <Card imageLink ="./images/servicesimages/googleworkspace.svg" name="Google Workspace"/>
    <Link href={`../../servicespages/Youtube/page.js`} className="Linklinks">
    <Card imageLink ="./images/servicesimages/youtube.svg" data={data} name="Youtube"/>
    </Link>
    <Card imageLink ="./images/servicesimages/figma.svg" name="Figma"/>
    <Card imageLink ="./images/servicesimages/github.svg" name="Github"/>
    <Card imageLink ="./images/servicesimages/zoom.svg" name="Zoom"/>
    <Card imageLink ="./images/servicesimages/gmail.svg" name="Gmail"/>
</section>
</section>
  )
}
