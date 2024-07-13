"use client"

import { Center, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";
import TestModel from "../TestModel";

function Scene() {
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
        <directionalLight position={[-5,-5,-5]} intensity={20} />
        <Suspense fallback={
            <Html><div className="text-red-500 etxt-center">Loading...</div></Html>
        }>
            <Center>
                 <TestModel scale={[15,15,15]} />
            </Center>
        </Suspense>
        <pointLight position={[25, 10,10]} intensity={100}/>
        <OrbitControls
        enableZoom={false} 
        />
  </Canvas>
  )
}

export default Scene;