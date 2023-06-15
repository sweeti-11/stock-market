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

function Footer() {
  return (
    <>
      <div className="container-fluid  footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor: "#375ae4"}}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 ">
              <h4 className="text-light mb-4">About us</h4>
              <p className="mb-3 ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
              {/* <p className="mb-3"><i><BsFillTelephoneForwardFill/></i>&nbsp;&nbsp;&nbsp;+917880020088</p>
                    <p className="mb-3"><i><AiOutlineMail/></i>&nbsp;&nbsp;&nbsp;info@thechaywala.com</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillTwitterCircle/></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillFacebook/></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillLinkedin/></i></a>
                        <a className="btn btn-square btn-light rounded-circle me-1" href=""><i><AiFillYoutube/></i></a>
                    </div> */}
            </div>
            <div className="col-lg-3 col-md-5">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="/aboutus"> About</a>
              <a className="btn btn-link" href="/contactus"> Contact</a>
              <a className="btn btn-link" href="/gallary">Services</a>
              {/* <a className="btn btn-link" href="">Terms & Condition</a>
              <a className="btn btn-link" href="">Support</a> */}
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Business Hours</h4>
              <p className="mb-1">Monday - Sunday</p>
              <h6 className="text-light">09:00 am - 4:00 pm</h6>
              {/* <p className="mb-1">Saturday</p>
                    <h6 className="text-light">09:00 am - 12:00 pm</h6>
                    <p className="mb-1">Sunday</p>
                    <h6 className="text-light">Closed</h6> */}
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h4 className="text-light mb-4">Head Office</h4>
              <p className="mb-3 ">
                <i className="fa fa-map-marker-alt  text-white test"></i>
                &nbsp;&nbsp;&nbsp;Sch No. -54, Shekher <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Residency, LG-10, Vijay Nagar, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indore, Madhya Pradesh <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;452010
              </p>
              <p className="mb-3"><i><BsFillTelephoneForwardFill /></i>&nbsp;&nbsp;+91&nbsp;7880020088</p>
              <p className="mb-3"><i><AiOutlineMail /></i>&nbsp;&nbsp;agefemservices@gmail.com</p>
              <div className="d-flex pt-3">
                {/* <a className="btn btn-square btn-light rounded-circle me-1" href=""><i class="fa-brands fa-twitter"></i></a> */}
                <a className="btn btn-square btn-light rounded-circle me-1" href="https://www.facebook.com/people/The-CHAY-WALA/100091463030614"><i class="fa-brands fa-facebook"></i></a>
                <a className="btn btn-square btn-light rounded-circle me-1" href=""><i class="fa-brands fa-linkedin-in"></i></a>
                <a className="btn btn-square btn-light rounded-circle me-1" href=""><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright --> */}
      <div className="text-center p-4 copyright" >
      <hr/>
        ©2023 All Rights Reserved
        <a className="text-reset fw-bold" href="/"> XYZ</a>
      </div>
      {/* <!-- Copyright --> */}
      <a href="#" className=" arrow btn btn-lg btn-success btn-lg-square rounded-circle back-to-top l-5"><i><AiOutlineArrowUp /></i></a>
    </>
  )
}

export default Footer;