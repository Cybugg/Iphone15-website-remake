import { PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import  Lights  from '../../components/Light'

function ModelView({ index,groupRef,gsapType,controlRef,setRotationState,item,size}){

  return (
  <View
  index={index}
  id={gsapType} 
  className={`border-2 border-red-500 h-full ${index ===2 ? "right-[-100%]" :"" }`}
  >

{/* Ambient Light */}
<ambientLight intensity={0.3} />
<PerspectiveCamera makeDefault position={[0,0,4]} />
<Lights />
<Suspense fallback={<div>
  Loading ...
</div>}>

</Suspense>
  </View>
  )
}

export default ModelView