import React, { useEffect } from 'react'
import intra from '../assest/intradef.jpg';
import Footer from './Footer'
import { motion } from "framer-motion"
import './Intraday.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Intraday = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    useEffect(() => {
        AOS.init({
            duration: 500, // Set the animation duration (in milliseconds)
            once: true, // Apply the animation only once
            offset: 200, // Set the offset (in pixels) for when the animation should trigger
            delay: 100, // Set the delay (in milliseconds) before the animation starts
        });
    }, []);

  return (
    <div>
    <div className='mainIntraday'>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    
        <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown" >Intraday</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item text-dark" aria-current="page">Intraday</li>
                </ol>
            </nav>
        </div>
    </div>
    </div>
    

    <section id="intraday" className="intraday">
      <div className="container-fluid">
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6" style={{marginRight:'-80px'}}>
                    <div className="row g-3">
                        <div className="col-6 text-end" style={{width:'470px'}}>
                        <motion.img 
                                 whileHover={{ scale: 1.1 }}
                                className="img-fluid bg-white w-100 mb-3 " data-aos="zoom-in-up" src={intra} alt=""  />
                               </div>
                        
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-aos="fade-left" data-aos-offset="500"
                        data-aos-duration="500">
                    <div className="section-title">
                        <h3 className="display-6" style={{fontFamily:'serif'}}> 
                        What Is Intraday?
                        </h3>
                    </div>
                    <div className="row g-3 mb-4">
                       
                        <div className="col-sm-8" style={{width:"max-content",marginTop:'30px'}}>
                            <p className="mb-0" style={{fontFamily:'sans-serif'}}>Intraday means "within the day". Purchasing and selling stocks and other financial instruments exchanged on the same day is known as intraday trading. In other words, intraday trading means all positions are squared-off before the market closes and there is no change in ownership of shares as a result of the trades. This means that multiple trades can be completed within a single trading day. The primary purpose of transacting in this method is to realize capital gains on purchased securities as well as minimize risks by keeping money invested for an extended period. </p>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
   
    {/* <div className='types'>
    <div className="row">
     <div className="col-lg-3 text-center">
    <div className="card" style={{width:'18rem'}}>
  <div className="card-body">
    <h5 className="card-title">The most common strategies used in Intraday:</h5>
    <ol>
        <li>Range Trading.</li>
        <li>News Trading.</li>
        <li>High-frequency trading.</li>
        <li>Scalp Trading or Scalping.</li>

    </ol>
  </div>
</div>
</div>
<div className="col-lg-3 text-center">
<div className="card text-center" style={{width:'18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Benefits of Intraday Trading:</h5>
    <ol>
        <li>Ends The Overnight Risk.</li>
        <li>Provides Higher Returns..</li>
        <li>Quadruple Leverage.</li>
        <li>Great Opportunity to Learn.</li>
        <li>Multiple Trading Opportunities</li>
    </ol>
  </div>
</div>
</div>
<div className="col-lg-3 text-center">
<div className="card text-end" style={{width:'18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Special Feature of Intraday Trading:</h5>
    <ol>
        <li>Regular Income.</li>
        <li>Good Liquidity.</li>
        <li>Better Profits.</li>
        <li>Low Expenses.</li>
    </ol>
  </div>
</div>
</div>
<div className="col-lg-3 text-center">
<div className="card text-end" style={{width:'18rem'}}>
  <div className="card-body">
    <h5 className="card-title">How to Make Profits in Intraday Trading:</h5>
    <ol>
        <li>Opening Range Breakout (ORB).</li>
        <li>Mapping Resistance and Support.</li>
        <li>Demand-Supply Imbalances.</li>
        <li>3:1 Risk-Reward Ratio.</li>
        <li>Average Directional Index (ADX).</li>
        <li>Use Relative Strength Index (RSI).</li>
    </ol>
  </div>
</div>
</div>
</div>  
</div> */}
 <div class="container-fluid">

<div class="row justify-content-center">
  <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
  </div>

  <div class="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
    <h3>The most common strategies used in Intraday:</h3>
    <p> of the best parts about Intraday trading is how well it lures investors to leverage price fluctuations. Invest and watch it; that's it. But if the right strategies are not used and in the right way, intraday trading can result in losses..</p>
    <div className='container'>

  <div className='col-lg-2'>
    <div class="card" style={{width:'18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='col-lg-2'>
    <div class="card" style={{width:'18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className='col-lg-2'>
    <div class="card" style={{width:'18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
  </div>
  </div>
</div>

</div>

      </div>

    </section>

    <Footer/>
    </div>
  )
}

export default Intraday;