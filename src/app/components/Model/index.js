"use client"
import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
import ModelView from './ModelView'
import { yellowImg } from '@/app/utils'
import * as THREE from "three"
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { models, sizes } from '@/app/constants'

function index() {
    const [size, setSize] = useState("small");
    const [model, setModel] = useState({
        title:'iPhone 15 pro in Natural Titanium',
        color:["#8F8A81", "#FFE7B9", "#6F6C64"],
        img: yellowImg
    })

    // Camera control for the model view
    const CameraControlSmall = useRef();
    const CameraControlLarge = useRef();

    // Models
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // rotation
    const [smallRotation, setsmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    useGSAP(
        () => {
            gsap.to(
                "#heading", {
                    y:0,
                    opacity:1
                }
            )
        }
    )


  return (
   <section className='common-padding'>
    <div className='screen-max-width'>
        <h1 id='heading' className='section-heading'>
            Take a closer look
        </h1>
    </div>
    <div className='flex flex-col items-center items-cnter mt-5'>
        <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
            <ModelView
                index={1}
                groupRef={small}
                gsapType="view1"
                controlRef={CameraControlSmall}
                setRotationState={setsmallRotation}
                item={model}
                size={size}
            />
            <ModelView
                index={2}
                groupRef={large}
                gsapType="view2"
                controlRef={CameraControlLarge}
                setRotationState={setLargeRotation}
                item={model}
                size={size}
            />
            <Canvas
            className='w-full h-full fixed top-0 bottom-0 left-0 right-0 overflow-hidden '
            eventSource={document && document.getElementById('root')}
            >
                <View.Port />
            </Canvas>
        </div>
        <div className='mx-auto w-full'>
            <p className='text-sm font-light text-center mb-5'>{model.title}</p>
            <div className='flex-center'>
                <ul className='color-container'>
                {models.map(
                    (item, i) =>(
                        <li key={i} className='w-6 h-6 rounded-full mx-2 cursor-pointer' style={{
                            backgroundColor: item.color[0]
                        }} onClick={()=> setModel(item)}>
                        </li>
                    ))}
                </ul>
                <button className='size-btn-container'>
                    {sizes.map(
                        ({label,value}) => (
                            <span key={label} className='size-btn'
                             style={{
                                backgroundColor: size === value? "white" : "transparent",
                                color: size === value? "black" : "white"
                             }}
                             onClick={
                                () => setSize(value)
                             }>
                                {label}
                            </span>
                        )
                    )}
                </button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default index