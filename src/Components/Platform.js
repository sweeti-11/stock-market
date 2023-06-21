import React from 'react'
import Footer from './Footer'
import mobile from '../assest/mobile.png'
import web from '../assest/web.png'
import { motion, useTime, useTransform } from "framer-motion";


import './platform.css'

const Platform = () => {
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
            <motion.div style={{ rotate }}>
            <img src={mobile} style={{paddingTop:"76px", paddingLeft:"176px",paddingRight:"176px", paddingBottom:"76px"}}></img>
            </motion.div>
            </div>
            <div className='col-lg-6'>
            <h2>MULTIPLE WATCH LIST</h2>
            <p>Now you can create multiple watch list and add scripts as per your preferences</p>
            </div>
            </div>
            </div>
            </section>
            <section id="platform" className='platform'>
            <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
            <h2>MULTIPLE WATCH LIST</h2>
            <p>Now you can create multiple watch list and add scripts as per your preferences</p>
            </div>
            <div className='col-lg-6'>
            <img src={mobile} style={{paddingTop:"76px", paddingLeft:"176px",paddingRight:"176px", paddingBottom:"76px"}}></img>
            </div>
            </div>
            </div>
            </section>
            <section id="platform" className='platform'>
            <div className='container'>
            <h2 className='text-center'>Web</h2>
            <div className='row'>
            <div className='col-lg-6'>
            <img src={web} className='img-fluid'></img>
            </div>
            <div className='col-lg-6'>
            <h2>MULTIPLE WATCH LIST</h2>
            <p>Now you can create multiple watch list and add scripts as per your preferences</p>
            </div>
            </div>
            </div>
            </section>
            <section id="platform" className='platform'>
            <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
            <h2>MULTIPLE WATCH LIST</h2>
            <p>Now you can create multiple watch list and add scripts as per your preferences</p>
            </div>
            <div className='col-lg-6'>
            <img src={web} className='img-fluid'></img>
            </div>
            </div>
            </div>
            </section>
    <Footer/>
    </div>
  )
}

export default Platform