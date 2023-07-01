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
import myImage from '../assest/bg.jpeg'


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
    <section className="counter img-fluid" style={{ backgroundImage:`url(${myImage})`,  marginBottom:"0px",backgroundRepeat:"no-repeat", backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center",zIndex:"2", marginTop:"48px"}}>
    <div className="container">
    <div className="row">
    <div className="col-lg-4 col-md-4 col-12">
      <Countdown text="Year Of Experience" start={0} target={13}/>
      </div>
      <div className="col-lg-4 col-md-4 col-12">
      <Countdown text="Happy Customers" start={250000}   target={300000} />
      </div>
      <div className="col-lg-4 col-md-4 col-12">
      <Countdown text="Follow Up" start={250000}  target={300000} />
      </div>
      </div>
      </div>
      
    </section>
    <Footer />
    
    
   </>
  )
}

export default Sections