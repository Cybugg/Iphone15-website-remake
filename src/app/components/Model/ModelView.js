"use client"
import { PerspectiveCamera, View, Html, OrbitControls} from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import Lights  from '../../components/Light'
import IPhone from './iphone';
import * as THREE from "three"

function ModelView({ index,groupRef,gsapType,controlRef,setRotationState,item,size}){
  
  return (
  <View
  index={index}
  id={gsapType} 
  style={
    {
      zIndex:999999999
    }
  }
  className={`border-2 border-red-500 h-full ${index ===2 ? "right-[-100%]" :"" }`}
  >
{/* Ambient Light */}
 <ambientLight intensity={0.3} /> 
<PerspectiveCamera makeDefault position={[0,0,4]} />
<Lights />
<OrbitControls
   makeDefault
   ref={controlRef}
   enableZoom
   enablePan={false}
   rotateSpeed={0.4}
   target={new THREE.Vector3(0, 0 ,0)}
   onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
/>

<group ref={groupRef}  name={`${index === 1}`? "small" : "large"} position={[0,0,0]}>
  <Suspense fallback={<Html><div>
  Loading ...
</div></Html>}>
<IPhone
  scale={index ===1 ? [15,15,15]:[17,17,17]}
/>
</Suspense> 
</group>

  </View>
  )
}

export default ModelView;