import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
//  import Contact from './Contact'
import Client from './Client'
import Feature from './Feature'
import Value from './Value'
import Services from './Services'
import Benefit from './Benefit'
import Market from './Market'
import Slider from './Slider'

function Sections() {
  return (
   <> 
    <Carousel/>
    <Slider/>
    <Services/>
    <Value/>
    {/* <Feature/>  */}
    <Benefit/>
    {/* <Market/> */}
    {/* <Contact/>  */}
    <Client/>
    <Footer />
    
   </>
  )
}

export default Sections