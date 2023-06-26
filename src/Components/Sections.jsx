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
import Countdown from './Countdown'


function Sections() {
  return (
   <> 
    <Carousel/>
   
    <Slider/>
    
    <Services/>
    <Value/>
    <Feature/> 
    <Benefit/>
    {/* <Market/> */}
    {/* <Contact/>  */}
    <Client/>
    <section className="counter">
    <div className="container">
    <div className="row">
    <div className="col-lg-4 col-md-4 col-12">
      <Countdown text="Project Completed" target={100} />
      </div>
      <div className="col-lg-4 col-md-4 col-12">
      <Countdown text="Satisfied Clients" target={500} />
      </div>
      <div className="col-lg-4 col-md-4 col-12">
      <Countdown text="Industries Served" target={1000} />
      </div>
      </div>
      </div>
      
    </section>
    <Footer />
    
    
   </>
  )
}

export default Sections