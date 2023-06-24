import React, {useEffect} from 'react'
import mobile from '../assest/mobile.png'
import iphone from '../assest/iphone.png'
import android from '../assest/android.png'
import './Benefit.css'
import AOS from 'aos'
import { motion, AnimatePresence} from "framer-motion"


const Market = () => {
  useEffect(() => {
    AOS.init();
    AOS.init({ disable: 'mobile'});
}, [])
  return (
    <div>
   
        <section id="market" className='market'>
        <div className='container'>
            <div className='row'>
            
            <div className='col-lg-6'>
            <AnimatePresence>
            {/* <motion.div
           animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
           > */}
           <motion.div
           animate={{ rotate: 360 }}
                transition={{ type: "spring", duration: 5, bounce: 0.6, repeat:Infinity }}
          //  animate={{ rotate: 360 }}
          //       transition={{
          //           duration: 2,
          //           repeat: Infinity,
          //           repeatType: "reverse",
          //       }}
          >
            <img className='marketimg_ani' src={mobile} style={{paddingTop:"76px", paddingLeft:"176px",paddingRight:"176px", paddingBottom:"76px"}}></img>
            </motion.div></AnimatePresence>
            </div>
            <div className='col-lg-6'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h2>Get the Market On Mobile</h2>
            <p>Sensiband is a wearable surgeon-designed FDA Class 1 Registered Medical Device. Sensiband: Surgeon-designed FDA Class Wearable Metal Test.</p>
             <div>
                {/* <img src={iphone}></img> */}
                <img src={android}></img>
             </div>
            </div>
            </div>  
            </div>
        </section>
        </div>
  )
}

export default Market