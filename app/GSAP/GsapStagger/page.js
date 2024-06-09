
"use client"
import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from "gsap"

const GsapStagger = () => {
    // TODO: Implement the gsap.stagger() method

        useGSAP(
            ()=>{
                gsap.to(".stagger-box",{
                    y:250,
                    rotation:360,
                    borderRadius:"100%",
                    repeat:-1,
                    yoyo:true,
                    stagger:{
                        amount:1.5,
                        grid:[2,1],
                        ease:"circle.inOut",
                        from:"center"
                    } ,
               
                })
            }, []
        )

  return (

    <main className='p-5'>   
<h1 className='font-bold text-2xl'>GsapStagger</h1> 
{/* - */}
<p className='mt-5 text-gray-500'>
  GSAP stagger is a feature that allows you to apple animations with a staggered delay to a group of elements.
</p>
{/* - */}
<p className='mt-5 text-gray-500'>
    By using the stagger feature in GSAP, you can specify the amount of time to stagger the animations between each element, as well as customize the easing the duration of each individual animation. This enables you to create dynamic and visually appealing effects, such as staggered fades, rotation, movements,and more.
</p>
{/* - */}
<p className='mt-3 text-gray-3 200200'>
Read more about the {''}
<a
href="https://greensock.com/docs/v3/GSAP/gsap.stagger()"
target='_blank'
rel='noreferrer noopener nofollow'
className='text-blue-400'
>
GSAP stagger 

</a>{" "}
feature
</p>


<div className='mt-20 flex gap-3 items-start justify-center '>

    <div className='
 w-20 h-20 bg-indigo-200 rounded-lg stagger-box' id='indigo-box'>
    </div>

    <div className='
 w-20 h-20 bg-indigo-300 rounded-lg stagger-box' id='indigo-box'>
    </div>

    <div className='
 w-20 h-20 bg-indigo-400 rounded-lg stagger-box' id='indigo-box'>
    </div>

    <div className='
 w-20 h-20 bg-indigo-500 rounded-lg stagger-box' id='indigo-box'>
    </div>

    <div className='
 w-20 h-20 bg-indigo-500 rounded-lg stagger-box' id='indigo-box'>
    </div>

    <div className='
 w-20 h-20 bg-indigo-600 rounded-lg stagger-box' id='indigo-box'>
    </div>

    <div className='
 w-20 h-20 bg-indigo-700 rounded-lg stagger-box' id='indigo-box'>
    </div>

    <div className='
 w-20 h-20 bg-indigo-800 rounded-lg stagger-box' id='indigo-box'>
    </div>
</div>


    </main>
   
  )
}
 
export default GsapStagger;