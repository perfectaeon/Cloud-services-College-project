import React from 'react'
import Link from 'next/link'
import Card from '../card/card'
import { data } from '@/app/data/data'
import Styles from './cardslist.module.css'
export default function Cardslist() {
  return (
    <section className={Styles["ListWrapper"]}>
    <section className={Styles["CardsList"]}>

                      <Link href="/Onedrive" className="Linklinks">
                    <Card imageLink ="./images/ms-onedrive.svg" name="Microsoft Onedrive"/>
                    </Link>

                                  <Link href="/Workspace" className='Linklinks'>
                                  <Card imageLink ="./images/googleworkspace.svg" name="Google Workspace"/>
                                  </Link>

                        <Link href={`/Youtube`} className="Linklinks">
                        <Card imageLink ="./images/youtube.svg" data={data} name="Youtube"/>
                        </Link>

                                            <Link href="/Figma" className='Linklinks'>                   
                                            <Card imageLink ="./images/figma.svg" name="Figma"/>
                                            </Link>

                <Link href="/Github" className='Linklinks'>                                       
                <Card imageLink ="./images/github.svg" name="Github"/>
                </Link> 
                
                                                <Link href="/Zoom" className="Linklinks">
                                                <Card imageLink ="./images/zoom.svg" name="Zoom"/>
                                                </Link>
                      <Link href="/Gmail" className='Linklinks'>                                           
                      <Card imageLink ="./images/gmail.svg" name="Gmail"/>
                      </Link> 
</section>
</section>
  )
}
