"use client"
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
import gsap from "gsap"


gsap.registerPlugin(ScrollTrigger);


const GSAPScrollTrigger = () => {
    // TODO: Implement the gsap scroll trigger method
    const SCROLL_REf = useRef();
    useGSAP(
        ()=>{
            
        }
    )


  return (

    <main className='p-5'>   
<h1 className='font-bold text-2xl'>GSAPScrollTrigger</h1> 
{/* - */}
<p className='mt-5 text-gray-500'>
 GSAP Scroll Trigger is a plugin that allows you to create animations that are triggered by the scroll position of the page.
</p>
{/* - */}
<p className='mt-5 text-gray-500'>
   With ScrollTrigger, you can define various actions to be triggered at specific scroll points, such as starting or ending an animation, scrubbing through animations as the user scrolls, pinning elements to the screen and more
</p>
{/* - */}
<p className='mt-3 text-gray-3 200200'>
Read more about the {''}
<a
href="https://gsap.com/docs/v3/plugins/ScrollTrigger/"
target='_blank'
rel='noreferrer noopener nofollow'
className='text-blue-400'
>
        GSAP scroll trigger

</a>{" "}
method.
</p>

{/* - */}
<div className='w-full h-[70vh] flex flex-col justify-center items-center'>
    <p className='text-center text-gray-500'>
        Scroll down to see the animation
    </p>

{/* - */}

<svg
className='animate-bounce mt-5'
xmlns='http://www.w3.org/2000/svg'
width="24"
height="24"
viewBox='0 0 24 24'
fill='none'
stroke='blue'
strokeWidth='2'
strokeLinecap='round'
strokeLinejoin='round'
>

    <path d='M12 19V5' />
    <path d='M5 12l7 7 7-7' />

</svg>
</div>

{/* - */}



<div className='mt-20 w-full flex flex-col items-start justify-center '>

   
    <div className='scroll-box w-20 h-20 bg-pink-500 rounded-lg' id='scroll-pink' ref={SCROLL_REf}>
    </div>
    <div className='scroll-box w-20 h-20 bg-orange-500 rounded-lg' id='scroll-orange' ref={SCROLL_REf}>
    </div>
</div>
 

    </main>
   
  )
}
 
export default GSAPScrollTrigger;