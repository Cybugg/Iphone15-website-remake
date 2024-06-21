import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"

export default function Home (){


  return (
  <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
  </main>
  )
}