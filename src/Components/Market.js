import React from 'react';
import mobile from '../assest/mobile.png';
import android from '../assest/android.png';
import './Benefit.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
const Market = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div>
      <section id="market" className='market'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              {isMobile ? (
                <img className='marketimg_ani' src={mobile} alt="Mobile" style={{ paddingTop: "76px", paddingLeft: "176px", paddingRight: "176px", paddingBottom: "76px" }}></img>
              ) : (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ type: "spring", duration: 5, bounce: 0.6, repeat: Infinity }}
                >
                  <img className='marketimg_ani' src={mobile} alt="Mobile" style={{ paddingTop: "76px", paddingLeft: "176px", paddingRight: "176px", paddingBottom: "76px" }}></img>
                </motion.div>
              )}
            </div>
            <div className='col-lg-6' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <h2>Get the Market On Mobile</h2>
              <p>Sensiband is a wearable surgeon-designed FDA Class 1 Registered Medical Device. Sensiband: Surgeon-designed FDA Class Wearable Metal Test.</p>
              <div>
                <img src={android} alt="Android"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Market;
