"use client"

import { Center, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";
import TestModel from "../TestModel";
import Lights from "../Light";
import * as THREE from "three"

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
           
        <ambientLight intensity={5} />
        <Lights />
        <PerspectiveCamera />
        <Suspense fallback={
            <Html><div className="text-white text-center">Loading...</div></Html>
        }>

                 <TestModel scale={[15,15,15]} />
        </Suspense>
        <pointLight position={[25, 10,10]} intensity={100}/>
        <OrbitControls
        makeDefault
        enableZoom={false} 
        enablePan={false}
        rotateSpeed={2}
        target={new THREE.Vector3(0, 0 ,0)}
       

        />
  </Canvas>
  )
}

export default Scene;