"use client"
import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from "gsap"

const GsapFrom = () => {
    // TODO: Implement the gsap.from() method
    useGSAP(
      ()=>{
        gsap.from("#green-box",{
          x:"250px",
          yoyo: true,
          rotation:"360",
          duration:"2",
          ease:"bounce.out"
        })
      },[]
    );


  return (

    <main className='p-5'>   
<h1 className='font-bold text-2xl'>GsapFrom</h1> 
{/* - */}
<p className='mt-5 text-gray-500'>
  The <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'> gsap.from()</code> method is used to animate elements from a new sate to their current state.
</p>
{/* - */}
<p className='mt-5 text-gray-500'>
    The <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.to()</code> method is similar to the {" "}
    <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.from()</code> method, bit the difference is that the {""}
    <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.to</code> method animates elements from their current state to a new state, while the <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.from()</code> method animates elements from a new state to their current state.
</p>
{/* - */}
<p className='mt-3 text-gray-3 200200'>
Read more about the {''}
<a
href="https://greensock.com/docs/v3/GSAP/gsap.from()"
target='_blank'
rel='noreferrer noopener nofollow'
className='text-blue-400'
>

GSAP From 
</a>{" "}
method.
</p>


<div className='mt-20 '>
    <div className='
 w-20 h-20 bg-green-500 rounded-lg' id='green-box'>

    </div>
</div>


    </main>
   
  )
}
 
export default GsapFrom;