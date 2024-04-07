import React from 'react'
import Link from 'next/link'
import Card from '../card/card'
import { data } from '@/app/data/data'
import Styles from './cardslist.module.css'
export default function Cardslist() {
  return (
    <section className={Styles["ListWrapper"]}>
    <section className={Styles["CardsList"]}>
      
    <Card imageLink ="Cloud-services-College-project/ms-onedrive.svg" name="Microsoft Onedrive"/>
    
    <Card imageLink ="Cloud-services-College-project/googleworkspace.svg" name="Google Workspace"/>
    <Link href={`../../servicespages/Youtube/page.js`} className="Linklinks">
    <Card imageLink ="Cloud-services-College-project/youtube.svg" data={data} name="Youtube"/>
    </Link>
    <Card imageLink ="Cloud-services-College-project/figma.svg" name="Figma"/>
    <Card imageLink ="Cloud-services-College-project/github.svg" name="Github"/>
    <Card imageLink ="Cloud-services-College-project/zoom.svg" name="Zoom"/>
    <Card imageLink ="Cloud-services-College-project/gmail.svg" name="Gmail"/>
</section>
</section>
  )
}
