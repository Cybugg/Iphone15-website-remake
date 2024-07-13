import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import dynamic from "next/dynamic"


const ModelScene = dynamic(()=>import("@/app/components/Model"),{ssr:false})

export default function Home (){


  return (
  <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <ModelScene />
  </main>
  )
}