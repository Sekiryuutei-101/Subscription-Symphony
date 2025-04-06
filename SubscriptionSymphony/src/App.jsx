import { useState } from 'react'
import Hero from "./hero";
import ManageSubs from './manageSubs';
import Pricing from './pricing';
import Footer from '../footer';
function App() {
  

  return (
    <>
      <Hero/>
      <ManageSubs />
      <Pricing />
      <Footer/>
    </>
  )
}

export default App
