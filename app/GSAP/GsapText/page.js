"use client"
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
import gsap from "gsap"


gsap.registerPlugin(ScrollTrigger);


const GSAPText = () => {
    // TODO: Implement the gsap scroll trigger method
    const SCROLL_REf = useRef();
    useGSAP(
        ()=>{
           gsap.to(
            "#text",{
                ease:"power1.inOut",
                opacity:1,
                y:0
            }
           );
           gsap.fromTo(
            ".para",{
                opacity:0,
                y:20
            },{
                opacity:1,
                y:0,
                delay:0.5,
                stagger:{
                    amount:0.1
                }
            }
           )
        }, [ ]
    )


  return (

    <main className='p-5'>   
<h1 className='font-bold text-2xl opacity-0 translate-y-8' id='text'>GSAPText</h1> 
{/* - */}
<p className='mt-5 text-gray-500 para'>
We can use same method like <code className='text-orange-400 '>gsap.to()</code> , <code className='text-orange-400'> gsap.from()</code>, <code className='text-orange-400'> gsap.fromto()</code> and <code className='text-orange-400'>gsap.timeline()</code> to animate text.
</p>
{/* - */}
<p className='mt-5 text-gray-500 para'>
  Using this method we can achieve various text animations and effect like fade in, fade out, slide in , slide out, and many more.
</p>
{/* - */}
<p className='mt-5 text-gray-500 para'>
For more advanced text animations and effects, you can explore the GSAP TextPlugin or other third party libraries that specializes in text animations. {''}

method.
</p>

<p className='mt-5 text-gray-500'>
    Read more about the {""}
<a
href="https://gsap.com/docs/v3/plugins/ScrollTrigger/"
target='_blank'
rel='noreferrer noopener nofollow'
className='text-blue-400'
>
        TextPlugin

</a>{" "}
Method
</p>



{/* - */}




 

    </main>
   
  )
}
 
export default GSAPText;