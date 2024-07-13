import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/app/components/scene"), {ssr: false})



function Boxes() {

  return (
    <div className="h-screen w-full">
      <Scene />
    </div>
  )
}

export default Boxes;