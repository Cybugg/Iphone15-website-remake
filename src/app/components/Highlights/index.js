"use client"
import { watchImg } from "@/app/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Highlights() {

  useGSAP(
    ()=>{
      gsap.to("#title", {opacity:1})
      gsap.to(".link", {opacity:1})
    },[]
  )

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
          <div>
            <h1 id="title" className='section-heading' >
               Get the highlights.
            </h1>
          </div>
          <div className="flex flex-wrap items-end gap-5">
              <p className="link">
                Watch the film
              </p>
              <img src={watchImg} alt={"watch"} className="ml-2" />
          </div>
      </div>
    </section>
  )
}

export default Highlights;