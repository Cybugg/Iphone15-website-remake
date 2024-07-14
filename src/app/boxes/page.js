import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/app/components/scene"), {ssr: false})



function Boxes() {

  return (
    <div className="h-screen w-full flex items-center realtive  justify-center relative">
      <div className="w-full absolute top-0 bottom-0 right-0 left-0 ">
     <Scene />
      </div>
      <div className="w-full absolute right-[-100%]">
     <Scene />
      </div>
    
    </div>
  )
}

export default Boxes;