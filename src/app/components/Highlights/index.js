"use client"
import { rightImg, watchImg } from "@/app/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import VideoCarousel from "../VideoCarousel"; 
import ScrollTrigger from "gsap/all";
import { animateWithGsap } from "@/app/utils/animations";
gsap.registerPlugin(ScrollTrigger)

function Highlights() {

  useGSAP(
    ()=>{
      animateWithGsap("#title", {
        y:0,
        opacity:1 })
      gsap.to(".link", {opacity:1})
    },[]
  )

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
          <div className="mb-36 w-full md:flex items-end justify-between">
            <h1 id="title" className='section-heading transalte-y-56 opacity-0' >
               Get the highlights.
            </h1>
            <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <Image src={watchImg} alt="watch" className="ml-2"   />
            </p>
            <p className="link">
              Watch the event
              <Image src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
          </div>
        {/* Video carousel */}
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights;