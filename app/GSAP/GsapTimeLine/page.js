"use client"
import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from "gsap"

const GsapTimeLine = () => {
    // TODO: Implement the gsap.timeline() method

    const TIMELINE = gsap.timeline({
    repeat:-1,
    repeatDelay:1,
    yoyo:true
    });

    useGSAP(
        ()=>{
            TIMELINE.to(
                "#purple-box",
                {
                    x:250,
                    rotation:360,
                    borderRadius:"100%",
                    duration:2,
                    ease:"back.inOut"

                }
            )

            TIMELINE.to("#purple-box",
                {
                    y:300,
                    scale:2,
                    rotation:360,
                    borderRadius:"100%",
                    duration:2,
                    ease:"back.inOut",
                    background:"#00ffee"
                }

            )
            TIMELINE.to("#purple-box",
                {
                    x:500,
                    scale:1,
                    rotation:360,
                    borderRadius:"8px",
                    duration:2,
                    ease:"back.inOut"

                }

            )



        },[]
    )



  return (

    <main className='p-5'>   
<h1 className='font-bold text-2xl'>GsapTimeLine</h1> 
{/* - */}
<p className='mt-5 text-gray-500'>
  The <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'> gsap.timeline()</code> method is used to create a timeline instance that can be used to manage multiple animations.
</p>
{/* - */}
<p className='mt-5 text-gray-500'>
    The <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.timeline()</code> method is similar to the {" "}
    <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.from()</code>, <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.to()</code> and <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.fromTo()</code> methods, bit the difference is that the {""}

    <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.timeline{"()"}</code> method is used to create a timeline instance that can be used to manage multiple animations,

    <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.fromTo{"()"}</code> method animates elements from a new state to a new state,
    <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.to</code> method animates elements from their current state to a new state, while the <code className='bg-slate-500 px-1 font-bold text-orange-300 200200'>gsap.from()</code> method animates elements from a new state to their current state respectively.
</p>
{/* - */}
<p className='mt-3 text-gray-3 200200'>
Read more about the {''}
<a
href="https://greensock.com/docs/v3/GSAP/gsap.to()"
target='_blank'
rel='noreferrer noopener nofollow'
className='text-blue-400'
>
        GSAP Timeline

</a>{" "}
method.
</p>


<div className='mt-20 flex flex-col items-start justify-center '>

    <span className='bg-slate-600 p-3 px-5 rounded my-12 cursor-pointer  ' onClick={()=>{
        TIMELINE.paused()?TIMELINE.play():TIMELINE.pause()
    }}>
    Play/Pause
    </span>
    <div className='
 w-20 h-20 bg-purple-500 rounded-lg' id='purple-box'>

    </div>
</div>


    </main>
   
  )
}
 
export default GsapTimeLine;