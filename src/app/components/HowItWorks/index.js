"use client"
import { chipImg, frameImg, frameVideo } from '@/app/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import ScrollTrigger from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function HowItWorks() {

    useGSAP(
        ()=>{
            gsap.from(
                "#chip",{ scrollTrigger:{
                    trigger:"#chip",
                    start:"20% bottom",
                },
            opacity:0,
            scale:2,
            duration:2,
            ease: "power2.inOut"     
         } )
        }
    )
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div id="chip" className='flex-center w-full my-20'>
                <img src={chipImg} alt="chip" width={180} height={180}  />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='hiw-title'>
                    A17 Pro chip
                    <br /> A monster winning for gaming.
                </h2>
                <p className='hiw-subtitle'>
                    It&apos;s here. The biggest redesign in the history of Apple GPUs.
                </p>
            </div>
            {/* conatainer for our video player */}
            <div className='mt-10 md:mt-20 mb-14'>
                <div className='relative h-full flex-center'>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt='frame' className='bg-transparent relative z-10' />

                        <div  className='hiw-video'>
                            <video>
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default HowItWorks