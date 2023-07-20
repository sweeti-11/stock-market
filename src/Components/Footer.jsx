import React from 'react'
import './footer.css'
import { AiOutlineArrowUp } from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  const apkUrl = process.env.PUBLIC_URL + './BullsEye.apk';
  return (
    <>
    <section className='footer-section' style={{marginTop:"-48px"}}>
      <div className="container-fluid  footer mt-5 py-5 wow fadeIn botom" data-wow-delay="0.1s" style={{backgroundColor: "#375ae4"}}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 ">
              <h4 className="text-light mb-4">About us</h4>
              <p className="mb-3 " >We Started bulleyetrade in 2007, bulleyetrade now has a presence in over 50+ locations with 13+ years 3.5+ Lakhs happy customers, and 7.5+ lakh follow-up customers nationwide. bulleyetrade earned the trust of these valued investors by providing them with top-notch services in various trading and investment.</p>
             
            </div>
            <div className="col-lg-3 col-md-6 links">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link"  href="/aboutus"> About</a>
              <a className="btn btn-link"  href="/contactus"> Contact</a>
              <a className="btn btn-link"  href="/service">Services</a>
              <a className="btn btn-link"  href="/platform">Platform</a>
              <a className="btn btn-link"  href="/intraday">Intraday</a>
              <a className="btn btn-link"  href="/holding">Holding</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Sunday</p>
              <p className="">09:00 AM - 11:30 PM</p>


                    <h5 style={{color:"#fff",marginTop:"55px"}}>Download The App</h5>
                    <Link to=" ">
                    </Link>
                    <a href={apkUrl} download={"BullsEye.apk"} >
                    <img  src={require('../assest/android-download.png')} style={{width:"177px"}} /></a></div>

            <div className="col-lg-3 col-md-6  head-office">
              <h4 className="text-light mb-4">Head Office</h4>
              <p className="mb-3 ">
                <div className='address'>
                <i className="fa fa-map-marker-alt  text-white test"></i>

                 42/9, Mhatre Bridge,
                 Opp.Siddhi Gardens,Vakil Nagar,
                 Pune, Maharashtra
                 411052
                 </div>
              </p>
              <div className='info-details'>

                <div className='info-registration'>
                <h5 className=""> <BsInfoCircle  className='icon' />
                      <span className='info-text'>Registration Info</span></h5>

              
              <p className='Sebi'> SEBI<span className='sebi-text'>- INZ000189438</span></p>
              <p className='membership' > MCX Membership Number<span className='membership-text'>-8230</span></p>
              <p className='cin'> CIN:<span className='cin-text'>-U51900MH1997PTC112491</span></p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright --> */}
      <hr style={{color:"#fff"}}/>
      <div className="text-center p-4 copyright" >
     
        ©2023 All Rights Reserved
        <a className="text-reset fw-bold" href="/"  style={{textDecoration:"none"}} > bulleyetrade</a>
      </div>
      {/* <!-- Copyright --> */}
      <a href="#" className=" arrow btn btn-lg btn-success btn-lg-square rounded-circle back-to-top l-5"><i><AiOutlineArrowUp /></i></a>
      </section>
    </>
  )
}

export default Footer;