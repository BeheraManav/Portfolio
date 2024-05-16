import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'


function App() {
  

  return (
   <main className="bg-black">
    <Navbar/>
    <Hero/>
    <Highlight/>
   </main>
  )
}

export default App
