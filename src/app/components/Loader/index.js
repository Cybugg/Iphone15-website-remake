import { Html } from '@react-three/drei';
import React from 'react'

function Loader() {
  return (
    <Html>
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
            <div className='w-[10vh] h-[10vh] rounded-full' >
               Loading...
            </div>
        </div>
        </Html>
  )
}

export default Loader;