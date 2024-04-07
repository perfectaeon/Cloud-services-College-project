import React from 'react'
import Link from 'next/link'
import Card from '../card/card'
import { data } from '@/app/data/data'
import Styles from './cardslist.module.css'
export default function Cardslist() {
  return (
    <section className={Styles["ListWrapper"]}>
    <section className={Styles["CardsList"]}>
      
    <Card imageLink ="ms-onedrive.svg" name="Microsoft Onedrive"/>
    
    <Card imageLink ="googleworkspace.svg" name="Google Workspace"/>
    <Link href={`../../servicespages/Youtube/page.js`} className="Linklinks">
    <Card imageLink ="youtube.svg" data={data} name="Youtube"/>
    </Link>
    <Card imageLink ="figma.svg" name="Figma"/>
    <Card imageLink ="github.svg" name="Github"/>
    <Card imageLink ="zoom.svg" name="Zoom"/>
    <Card imageLink ="gmail.svg" name="Gmail"/>
</section>
</section>
  )
}
