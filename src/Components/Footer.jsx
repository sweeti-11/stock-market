import React from 'react'
import './footer.css'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaAddressCard } from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { FcRight } from "react-icons/fc";
import { AiOutlineRight } from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'

function Footer() {
  return (
    <>
    <section className='footer-section'>
      <div className="container-fluid  footer mt-5 py-5 wow fadeIn botom" data-wow-delay="0.1s" style={{backgroundColor: "#375ae4"}}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 ">
              <h4 className="text-light mb-4">About us</h4>
              <p className="mb-3 " >Started in 2007, bullsnbears now has a presence in over 50+ locations with over 500APs, and 450+ employees serving over 3Lakhs+ customers nationwide. Bullsnbears earned the trust of these valued investors by providing them with top-notch services in various trading and investment</p>
              {/* <p className="mb-3"><i><BsFillTelephoneForwardFill/></i>&nbsp;&nbsp;&nbsp;+917880020088</p>
                    <p className="mb-3"><i><AiOutlineMail/></i>&nbsp;&nbsp;&nbsp;info@thechaywala.com</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillTwitterCircle/></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillFacebook/></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillLinkedin/></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillYoutube/></i></a>
                    </div> */}
            </div>
            <div className="col-lg-3 col-md-6 links">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link"  href="/aboutus"> About</a>
              <a className="btn btn-link"  href="/contactus"> Contact</a>
              <a className="btn btn-link"  href="/service">Services</a>
              <a className="btn btn-link"  href="/platform">Platform</a>
              <a className="btn btn-link"  href="/intraday">Intraday</a>
              <a className="btn btn-link"  href="/holding">Holding</a>

              {/* <a className="btn btn-link" href="">Terms & Condition</a>
              <a className="btn btn-link" href="">Support</a> */}
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Sunday</p>
              <p className="">09:00 AM - 11:30 PM</p>
              {/* <p className="mb-1">Saturday</p>
                    <h6 className="text-light">09:00 am - 12:00 pm</h6>
                    <p className="mb-1">Sunday</p>
                    <h6 className="text-light">Closed</h6> */}
            </div>
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
              {/* <p className="mb-3"><i><BsFillTelephoneForwardFill /></i>&nbsp;&nbsp;+91&nbsp;7880020088</p>
              <p className="mb-3"><i><AiOutlineMail /></i>&nbsp;&nbsp;agefemservices@gmail.com</p> */}
              {/* <div className="d-flex pt-3">
                <a className="btn btn-square btn-light rounded-circle me-1" href=""><i class="fa-brands fa-twitter"></i></a>
                <a className="btn btn-square btn-light rounded-circle me-1" href="/"><i class="fa-brands fa-facebook"></i></a>
                <a className="btn btn-square btn-light rounded-circle me-1" href="/"><i class="fa-brands fa-linkedin-in"></i></a>
                <a className="btn btn-square btn-light rounded-circle me-1" href="/"><i class="fa-brands fa-instagram"></i></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright --> */}
      <hr style={{color:"#fff"}}/>
      <div className="text-center p-4 copyright" >
     
        ©2023 All Rights Reserved
        <a className="text-reset fw-bold" href="/" > bulleyetrade</a>
      </div>
      {/* <!-- Copyright --> */}
      <a href="#" className=" arrow btn btn-lg btn-success btn-lg-square rounded-circle back-to-top l-5"><i><AiOutlineArrowUp /></i></a>
      </section>
    </>
  )
}

export default Footer;