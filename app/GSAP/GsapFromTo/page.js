"use client"
import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from "gsap"

const GsapFromTo = () => {
    // TODO: Implement the gsap.fromTo() method
    useGSAP(
      ()=>{
        gsap.fromTo(" #red-box",{
                borderRadius:0,
                x:"0",
                rotation:"0"
        },{
          repeat:-1,
          x:"250px",
          yoyo: true,
          rotation:"360",
          duration:"2",
          borderRadius:"100%",
          ease:"bounce.out"
        })
      },[]
    );


  return (

    <main className='p-5'>   
<h1 className='font-bold text-2xl'>GsapFrom</h1> 
{/* - */}
<p className='mt-5 text-gray-500'>
  The <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'> gsap.fromTo()</code> method is used to animate elements from a new sate to a new state.
</p>
{/* - */}
<p className='mt-5 text-gray-500'>
    The <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.fromTo()</code> method is similar to the {" "}
    <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.from()</code> and <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.to()</code> methods, bit the difference is that the {""}
    <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.fromTo{"()"}</code> method animates elements from a new state to a new state,
    <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.to</code> method animates elements from their current state to a new state, while the <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.from()</code> method animates elements from a new state to their current state respectively.
</p>
{/* - */}
<p className='mt-3 text-gray-3 200200'>
Read more about the {''}
<a
href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
target='_blank'
rel='noreferrer noopener nofollow'
className='text-blue-400'
>
GSAP From to
</a>{" "}
method.
</p>


<div className='mt-20 '>
    <div className='
 w-20 h-20 bg-red-500 rounded-lg' id='red-box'>

    </div>
</div>


    </main>
   
  )
}
 
export default GsapFromTo;