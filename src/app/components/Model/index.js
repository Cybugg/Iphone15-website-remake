"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
import ModelView from './ModelView'
import { yellowImg } from '@/app/utils'
import * as THREE from "three"
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/app/components/Model/scene"), {ssr: false})

import { models, sizes } from '@/app/constants'


const Model = () => {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
      title: 'iPhone 15 Pro in Natural Titanium',
      color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
      img: yellowImg,
    })


    const [win, setWin] = useState(<div></div>)

    useEffect(
        ()=>{
            setWin(document.getElementById("root"))
        },[]
    )
  
    // camera control for the model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();
  
    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());
  
    // rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);
  

    // Animations

    // GSAP timeline
    const tl = gsap.timeline();
    useGSAP(() => {
        gsap.to('#heading', { y: 0, opacity: 1 })
      }, []);
    

    return (
      <section className="common-padding" id='canvas'>
        <div className="screen-max-width">
          <h1 id="heading" className="section-heading font-bold text-white">
            Take a closer look.
          </h1>
  
          <div className="flex flex-col items-center mt-5">
           
             {/* The Scene */}
             <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden flex items-center relative  justify-center relative">
      <div className="w-full  absolute top-0 bottom-0 right-0 left-0 ">
     <Scene
      index={1}
      groupRef={small}
      gsapType="view1"
      controlRef={cameraControlSmall}
      setRotationState={setSmallRotation}
      item={model}
      size={size}
     />
      </div>
      <div className="w-full absolute right-[-100%]">
     <Scene 
       index={2}
       groupRef={large}
       gsapType="view2"
       controlRef={cameraControlLarge}
       setRotationState={setLargeRotation}
       item={model}
       size={size}
     />
      </div>
            </div>
  
            <div className="mx-auto w-full">
              <p className="text-sm font-light text-center mb-5">{model.title}</p>
  
              <div className="flex-center">
                <ul className="color-container">
                  {models.map((item, i) => (
                    <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{ backgroundColor: item.color[0] }} onClick={() => setModel(item)} />
                  ))}
                </ul>
  
                <button className="size-btn-container">
                  {sizes.map(({ label, value }) => (
                    <span key={label} className="size-btn" style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white'}} onClick={() => setSize(value)}>
                      {label}
                    </span>
                  ))}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Model;