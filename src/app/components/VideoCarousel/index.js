"use client"

import { hightlightsSlides } from "@/app/constants";
import { pauseImg, playImg, replayImg } from "@/app/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";



const VideoCarousel = () => {
        const videoRef = useRef([]);
        const videoSpanRef = useRef([]);
        const videoDivRef = useRef([]);


        const [video,setVideo] = useState({
            isEnd:false,
            startPlay:false,
            videoId:0,
            isLastVideo:false,
            isPlaying:false
        })

        const {isEnd,startPlay,videoId,isLastVideo,isPlaying} = video;

        useGSAP(
            ( ) => {
                // video animation to play the video when it is in the view
    gsap.to("#video", {
        scrollTrigger: {
          trigger: "#video",
          toggleActions: "restart none none none",
        },
        onComplete: () => {
          setVideo((pre) => ({
            ...pre,
            startPlay: true,
            isPlaying: true,
          }));
        },
      });
            },[isEnd,videoId]
        )


        const [loadedData,setLoadedData] = useState([])


        useEffect(() => {
            if (loadedData.length > 3) {
              if (!isPlaying) {
                videoRef.current[videoId].pause();
              } else {
                startPlay && videoRef.current[videoId].play();
              }
            }
          }, [startPlay, videoId, isPlaying, loadedData]);

    
        const handleLoadedMetaData = (i,e) => setLoadedData((pre) => [...pre, e]);


        useEffect(
            ()=>{
                const CurrentProgress = 0;
                let span = videoSpanRef.current;
                if(span && span[videoId]){
                    // animete the progress of the video

                    let animation = gsap.to(span[videoId],{
                        onUpdate:()=>{},
                        onComplete:()=>{}
                    })
                }
            },[videoId,startPlay]
        )

        const handleProcess = (type,i) => {
            switch (type){
                case "video-end":
                    setVideo(prev => ({
                        ...prev,
                        isEnd:true,
                        videoId: i + 1,
                    }))
                    break;
                case "video-last" :
                       setVideo(prev => ({
                        isLastVideo:true
                       }))
                       break;
                case "video-reset"  :
                    setVideo(prev => ({
                        isLastVideo:false,
                        videoId: 0
                       }))     
                case "play":
                    setVideo(prev => ({
                        isPlaying:true
                       }))   
                    break;
                default:
                    break;


            }

        }


  return (
    <>
        <div className="flex items-center  ">
            {hightlightsSlides.map(
                (list,i) => <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                    <div className="video-carousel_container">
                        <div className=" w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                            <video id="video"  playsInline preload="auto" muted ref={
                                (ele) => videoRef.current[i] = ele}
                                onPlay={()=>{
                                    setVideo((prevVideo)=>({
                                        ...prevVideo, isPlaying:true
                                    }))
                                }}
                                onLoadedMetadata={e => handleLoadedMetaData(i, e)}
                                >
                                <source src={list.video} type="video/mp4"> 
                                </source>
                            </video>  
                        </div>

                        <div className="absolute top-12 left-[5%] z-10">
                            {list.textLists.map((text) => (
                                <p key={text} className="md:text-2xl text-xl font-medium">
                                    {text}
                                </p>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </div>

       {/* controls */}
        <div className="relative flex-center mt-10"> 
            <div className="bg-gray-300 flex-center py-5 px-7 rounded-full backdrop-blur">
                {videoRef.current.map((_, i)=> (
                    <span className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer " key={i}  ref={(ele => (videoDivRef.current[i]) = ele)}>
                        <span className=" absolute h-full w-full rounded-full" rel={ele => videoSpanRef.current[i] = ele}  />
                    </span>
                ))}
            </div>

            <div className="control-btn cursor-pointer">
                <Image src={isLastVideo? replayImg :
                 !isPlaying? playImg : pauseImg}  
                 alt={
                    isLastVideo? " Replay" : 
                    !isPlaying? "Play" : "Pause"
                }
                onClick={
                    isLastVideo? () => handleProcess('video-reset'):
                    !isPlaying? () =>  handleProcess('play') : () => handleProcess('pause')
                }
                />
            </div>
        </div>
    </>
  );
};
 
export default VideoCarousel;
