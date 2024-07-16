"use client"

import { Center, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";
import Iphone from "./iphone";
import Lights from "../Light";
import * as THREE from "three"
import Loader from "../Loader";

function Scene(props) {
  return (
  <Canvas gl={{antialias:true}}
          dpr={[1,1.5]}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: 'hidden'}}
            className="w-full h-full"
          >
           
        <ambientLight intensity={0.5} />
        <Lights />
        <PerspectiveCamera />
        <Suspense fallback={
            <Loader />
        }>

                 <Iphone 
                    scale={props.index ===1?
                                 [30,30,30]:
                               [34, 34, 34]}
                    item={props.item}
                    size={props.size} />
        </Suspense>
        <pointLight position={[25, 10,10]} intensity={100}/>
        <OrbitControls
        makeDefault
        enableZoom={false} 
        enablePan={false}
        rotateSpeed={0.5}
        target={new THREE.Vector3(0, 0 ,0)}
        ref={props.controlRef}
        onEnd={() => props.setRotationState(props.controlRef.current.getAzimuthalAngle())}
        />
  </Canvas>
  )
}

export default Scene;