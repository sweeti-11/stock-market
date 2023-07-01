import React,{useEffect} from 'react'
import Footer from './Footer'
import mobile from '../assest/mobile.png'
import web from '../assest/web.png'
import Shake from 'react-reveal/Shake';
import { motion, useTime, useTransform, AnimatePresence } from "framer-motion";
import { useMediaQuery } from 'react-responsive';


import './platform.css'

const Platform = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <div>
         <div className='mainContact'>
                <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">

                    <div className="container text-center py-5">
                        <h1 className="display-2 text-dark mb-4 animated slideInDown">Platform</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                                <li className="breadcrumb-item text-dark" aria-current="page" >Platform</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <section id="platform" className='platform'>
            <div className='container'>
            <h2 className='text-center'>Mobile</h2>
            <div className='row'>
            <div className='col-lg-6'>
            {isMobile ? (
            <img src={mobile} style={{paddingTop:"76px", paddingLeft:"176px",paddingRight:"176px", paddingBottom:"76px"}}></img>
            ) : (
            <motion.div style={{ rotate }}>
                          <img src={mobile} style={{paddingTop:"76px", paddingLeft:"176px",paddingRight:"176px", paddingBottom:"76px"}}></img>

            </motion.div>
              )}
            </div>
            <div className='col-lg-6' data-aos="fade-up-right" data-aos-duration="3000">
            <h2>MULTIPLE WATCH LIST</h2>
            <p>Now you can create multiple watch list and add scripts as per your preferences</p>
            </div>
            </div>
            </div>
            </section>
            <section id="platform" className='platform'>
            <div className='container'>
            <div className='row'>
            <div className='col-lg-6'  data-aos="fade-up"
     data-aos-duration="3000">
            <h2>BUY MULTIPLE SHARES IN INTRDAY</h2>
            <p>Now you can buy and sell multiple shares in intraday and add scripts as per your preferences</p>
            </div>
            <div className='col-lg-6'>
            <AnimatePresence>
                        <motion.div
                            initial={{ x: -50 }}
                            animate={{ x: 10 }}
                            exit={{ x: 100 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}>
            <img src={mobile} style={{paddingTop:"76px", paddingLeft:"176px",paddingRight:"176px", paddingBottom:"76px"}}></img>
           </motion.div>
           </AnimatePresence>
            </div>
            </div>
            </div>
            </section>
            <section id="platform" className='platform'>
            <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
            {isMobile ? (
            <img src={mobile} style={{paddingTop:"76px", paddingLeft:"176px",paddingRight:"176px", paddingBottom:"76px"}}></img>
            ) : (
            <motion.div style={{ rotate }}>
                          <img src={mobile} style={{paddingTop:"76px", paddingLeft:"176px",paddingRight:"176px", paddingBottom:"76px"}}></img>

            </motion.div>
              )}
            </div>
            <div className='col-lg-6' data-aos="fade-up-right" data-aos-duration="3000">
            <h2>BUY MULTIPLE SHARES IN HOLDINGS</h2>
            <p>Now you can buy and sell multiple shares in holdings and add scripts as per your preferences</p>
            </div>
            </div>
            </div>
            </section>
            <section id="platform" className='platform'>
            <div className='container'>
            <h2 className='text-center'>Web</h2>
            <div className='row'>
            <div className='col-lg-6'>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }} // Initial styles of the image
        animate={{ opacity: 1, scale: 1 }} // Animation styles
        transition={{ duration: 5 }} // Animation duration
      >
           
            <img src={web} className='img-fluid'></img>
            </motion.div>
            </div>
            <div className='col-lg-6'>
            <h2>MULTIPLE WATCH LIST</h2>
            <p>Now you can buy and sell multiple shares in intraday and add scripts as per your preferences</p>
            </div>
            </div>
            </div>
            </section>
            <section id="platform" className='platform'>
            <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
            <h2>BUY MULTIPLE SHARES IN INTRDAY</h2>
            <p>Now you can buy multiple commodity and add scripts as per your preferences</p>
            </div>
            <div className='col-lg-6' style={{marginBottom:"30px"}}>
            <Shake duration={6000} delay={3000}>
            <img src={web} className='img-fluid'></img>
            </Shake>
            </div>
            </div>
            </div>
            </section>
            <section id="platform" className='platform'>
            <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }} // Initial styles of the image
        animate={{ opacity: 1, scale: 1 }} // Animation styles
        transition={{ duration: 5 }} // Animation duration
      >
           
            <img src={web} className='img-fluid mb-5'></img>
            </motion.div>
            </div>
            <div className='col-lg-6'>
            <h2>BUY MULTIPLE SHARES IN HOLDINGS</h2>
            <p>Now you can buy and sell multiple shares in holdings and add scripts as per your preferences</p>
            </div>
            </div>
            </div>
            </section>
    <Footer/>
    </div>
  )
}

export default Platform