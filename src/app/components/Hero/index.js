"use client"
import React, { useState } from 'react'
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { heroVideo,smallHeroVideo } from '@/app/utils'

function Hero() {

  
  const [videoSrc,setVideoSrc] = useState(Window.innerWidth < 760 ?smallHeroVideo: heroVideo )
  useGSAP(
    ()=>{
      gsap.to("#hero",{
        opacity:1 ,
        delay:1.5,

      }
      )
    }
  )
  return (
   <section className='w-full nav-height bg-black relative '>
    <div className='h-5/6 w-full flex-center flex-col '>
        <p id='hero' className='hero-title'>iPhone 15 Pro</p>
        <div className='md:w-5/6 w-3/4 '>
          <video>
            <source src={videoSrc} />
          </video>
        </div>
    </div>
   </section>
  )
}

export default Hero;