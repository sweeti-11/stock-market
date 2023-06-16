import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
// import Contact from './Contact'
import Client from './Client'
import Feature from './Feature'
import Value from './Value'
import Services from './Services'

function Sections() {
  return (
   <> 
    <Carousel/>
    <Services/>
    <Value/>
    <Feature/> 
    <Client/>
    {/* <Contact/>  */}
    <Footer />
   </>
  )
}

export default Sections