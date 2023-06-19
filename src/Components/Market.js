import React from 'react'
import mobile from '../assest/mobile.png'
import iphone from '../assest/iphone.png'
import android from '../assest/android.png'
import './Benefit.css'


const Market = () => {
  return (
    <div>
        <section id="market" className='market'>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
            <img src={mobile} style={{paddingTop:"76px", paddingLeft:"176px",paddingRight:"176px", paddingBottom:"76px"}}></img>
            </div>
            <div className='col-lg-6'>
            <h2>Get the Market On Mobile</h2>
            <p>Sensiband is a wearable surgeon-designed FDA Class 1 Registered Medical Device. Sensiband: Surgeon-designed FDA Class Wearable Metal Test.</p>
             <div>
                <img src={iphone}></img>
                <img src={android} style={{padding:"30px"}}></img>
             </div>
            </div>
            </div>  
            </div>
        </section>
        </div>
  )
}

export default Market