import React from 'react'
import { useEffect } from 'react'
import './about.css'
import Roseteaabout from '../assest/ReseTeaAbout.jpg'
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 3000, // Set the animation duration (in milliseconds)
            once: true, // Apply the animation only once
            offset: 200, // Set the offset (in pixels) for when the animation should trigger
            delay: 100, // Set the delay (in milliseconds) before the animation starts
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5" style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                    <div className="col-lg-6" style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                      
                         <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    className="img12  " data-aos="zoom-in-up" src={Roseteaabout} alt="" loading='lazy' >
                          </motion.img>
                            
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-aos="fade-left" data-aos-offset="500"
                        data-aos-duration="500">
                        <div className="section-title">
                            <h1 className="display-6" style={{ fontFamily: 'serif' }}>The Chay Wala Special Hydration and weight loss Rose Tea.</h1>
                        </div>
                        <div className="row g-3 mb-4">
                            {/* <div className="col-sm-4">
                                <img className="img-fluid bg-white w-100" src={about5} alt="" />
                            </div> */}
                            <div className="col-sm-8" style={{width:"max-content",fontFamily:'sans-serif', fontSize:'20px'}}>
                                {/* <h5>Our tea is one of the most popular drinks in the world</h5> */}
                                <p className="mb-0">Try The Chay Wala special delicious rose tea. Enjoy a cup of this delicious, soothing tea with your friends or partner. It's the perfect way to relax and unwind after a long day. it smells divine. If you're looking for something sweet and floral.</p>
                                <br />
                                <p className="mb-0">Rose tea is a hot beverage brewed from dried rose petals and floral buds. It provides stress relief, improves digestion, eases anxiety, promotes relaxation, and helps manage diabetes. Many people enjoy rose tea for its medicinal properties.</p>

                            </div>
                        </div>
                        {/* <div className="border-top mb-4"></div> */}
                        {/* <div className="row g-3">
                            <div className="col-sm-8">
                                <h5>Daily use of a cup of tea is good for your health</h5>
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                            </div>
                    s        <div className="col-sm-4">
                                <img className="img-fluid bg-white w-100" src={about6} alt="" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About



