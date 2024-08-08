import React from "react"
import Navbar from "./components/Navbar"
import Particles from "./components/magicui/particles"
import About from "./components/About.jsx"

function App() {
  

  return (
    <>
    
    <Particles className="absolute inset-0 z-0 " color="#ffffff" quantity={300}>
    </Particles>
    <Navbar className='sticky z-10 ' />
    <About className='relative m-10 z-10 '/>
    
    </>
  )
}

export default App
