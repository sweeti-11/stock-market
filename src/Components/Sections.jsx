import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
// import Contact from './Contact'
import Client from './Client'
import Feature from './Feature'
import Value from './Value'
import Services from './Services'
import Benefit from './Benefit'
import Market from './Market'

function Sections() {
  return (
   <> 
    <Carousel/>
    <Services/>
    <Value/>
    <Feature/> 
    <Client/>
    <Benefit/>
    <Market/>
    {/* <Contact/>  */}
    <Footer />
    
   </>
  )
}

export default Sections