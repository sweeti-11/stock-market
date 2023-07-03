import React, { useEffect } from 'react'
import slide from '../assest/slider1.jpg';
import Footer from './Footer'
import { motion } from "framer-motion"
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {CiLocationOn} from 'react-icons/ci'
import {BsPerson} from 'react-icons/bs'
import {BsPersonAdd} from 'react-icons/bs'
const Aboutus = () => {
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

   
   
    {/* <!-- Page Header Start --> */}
    <div className='mainAboutus'>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    
        <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown" >About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown ">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item text-dark " aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
    </div>
    
    {/* <!-- Page Header End --> */}


    {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6" style={{marginRight:'-80px'}}>
                    <div className="row g-3">
                        <div className="col-6 text-end" style={{width:'470px'}}>
                        <motion.img 
                                 whileHover={{ scale: 1.1 }}
                                className="img-fluid bg-white w-100 mb-3 " data-aos="zoom-in-up" src={slide} alt=""  />
                               
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-aos="fade-left" data-aos-offset="500"
                        data-aos-duration="500">
                    <div className="section-title">
                        <h1 className="display-6" style={{fontFamily:'serif'}}> 
                         Welcome To Bulleyetrade
                        </h1>
                    </div>
                    <div className="row g-3 mb-4">
                        
                        <div className="col-sm-8" style={{width:"max-content",marginTop:'30px'}}>
                            <p className="mb-0" style={{fontFamily:'sans-serif'}}>We Started bullsnbears in 2007, bullsnbears now has a presence in over 50+ locations with 13+ years 3.5+ Lakhs happy customers, and 7.5+ lakh follow-up customers nationwide. Bullsnbears earned the trust of these valued investors by providing them with top-notch services in various trading and investment. </p>
                            <br/>
                            <p className="mb-0" style={{fontFamily:'sans-serif'}}>Bullsnbears is the market leader in the International Commodity market providing investors with personalized and prompt services. Bullsnbears with over a decade of expertise has been awarded time and time again by MCX.</p>
                            <br/>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    



    <section id="about" class="about">
      <div class="container-fluid">

        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
          </div>

          <div class="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Bulleyetrade</h3>
            <p>We’ve been hard at work creating an investment experience to achieve your financial goals. It’s our passion to offer you the best Product, Technology & Service. We ensure the trading experience at Bullsnbears to be one of its kind, with the help of our expertise. Bullsnbears revels in its attention to detail services which enables the investors to reach their smart goals in no time. Lovingly called as the Financial supermarket, providing all services under one roof, Bullsnbears specialities are not few. Personalized services, lowest recorded brokerage charges, latest tech tool support and tested apps to simplify trading procedures, free training, and live updates are just the surface services in Bullsnbears highly transparent service list. Strictly adhering to MCX guidelines. With multiple branches spread across the nation, Bullsnbears provides multi-language support and at-home training to keep you at ease to help you trade at maximum efficiency.</p>

            <div class="icon-box">
              <div class="icon"><CiLocationOn/></div>
              <h4 class="title"><a href="">Year Of Experience 13+</a></h4>
              <p class="description">
              We have completed 13+ years in the trading field.
             </p>
            </div>

            <div class="icon-box">
              <div class="icon"><BsPerson/></div>
              <h4 class="title"><a href="">Happy Customers 3,15,650+</a></h4>
              <p class="description">We have 3,15,650+ happy customers who always get benefits from us.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><BsPersonAdd/></div>
              <h4 class="title"><a href="">Follow Up 7,56,308+</a></h4>
              <p class="description">We have 7,56,308+ customers who follow us.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    <Footer/>
  
    {/* <!-- JavaScript Libraries --> */}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="tea-shop-website-template/lib/wow/wow.min.js"></script>
    <script src="tea-shop-website-template/lib/easing/easing.min.js"></script>
    <script src="tea-shop-website-template/lib/waypoints/waypoints.min.js"></script>
    <script src="tea-shop-website-template/lib/owlcarousel/owl.carousel.min.js"></script>

    {/* <!-- Template Javascript --> */}
    <script src="js/main.js"></script>


    </div>
  )
}

export default Aboutus;