import React,{useEffect} from 'react'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { AiTwotoneMail} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {  FaAddressBook} from 'react-icons/fa'
import './Contact.css'
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    // <div>
    //     <div className="container-xxl contact py-5" style={{marginTop:'50px'}}>
  
    //     <div className="container">
    //         <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"500px"}}>
    //             {/* <p className="fs-5 fw-medium fst-italic text-primay"> Contact Us  </p> */}
    //             <h1 className="display-6" style={{fontWeight:'bold'}}>Contact us right now</h1>
    //         </div>
    //         <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.1s">
    //             <div className="col-lg-8" style={{paddingTop:'20px'}}>
    //                 {/* <p className="text-center mb-5">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p> */}
    //                 <div className="row g-5">
    //                     <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
    //                         <div className="btn-square mx-auto mb-3">
    //                             <i><BsFillTelephoneOutboundFill/> </i>
    //                         </div>
    //                         <p className="mb-2">+91&nbsp;7880020088</p>
    //                         {/* <p className="mb-0">support@example.com</p> */}
    //                     </div>
    //                     <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
    //                         <div className="btn-square mx-auto mb-3">
    //                             <i> <AiTwotoneMail/>  </i>
    //                         </div>
    //                         <p className="mb-2">agefemservices@gmail.com</p>
    //                         {/* <p className="mb-0">+012 345 67890</p> */}
    //                     </div>
    //                     <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
    //                         <div className="btn-square mx-auto mb-3">
    //                         <i className="fa fa-map-marker-alt  text-black"></i>

    //                         </div>
    //                         <p className="mb-2">Sch No. - 54</p>
    //                         <p className="mb-0">Shekher Residency, LG-10, Vijay Nagar, Indore, Madhya Pradesh 452010</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
      
    // </div>
    // </div>


<section className="section bottom-animate">
<div className="container">
  <div className="row md-m-25px-b m-40px-b justify-content-center text-center">
      <div className="col-lg-6">
          <h3 className="h1 m-15px-b">Contact us right now</h3>
      </div>
  </div>
    <div className="row">
      <div className="col-sm-4">
        <div className="contactBox">
            <div className="contact-icon">
            <i><BsFillTelephoneOutboundFill/> </i>        
                </div>
            <div className="contact-Content">
            {/* <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s"> */}
            <div className="contact-Content">

            <h4 className="title">
                  Contact Number
             </h4>
                <p className="description ">+91&nbsp;7880020088</p>
             </div>
                 {/* </div> */}
            </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="contactBox">
            <div className="contact-icon">
            <i> <AiTwotoneMail/>  </i>
            </div>
            <div className="contact-Content">
                <h4 className="title">
                  Email Address
                </h4>
                   <p className="description" >agefemservices@gmail.com</p>

            </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="contactBox">
            <div className="contact-icon">
              <i><MdLocationOn/></i>

            </div>
            <div className="contact-Content">
                <h4 className="title">
                  Address
                </h4>
                <p className=" description ">Sch No. - 54 Shekher Residency, LG-10, Vijay Nagar, Indore, Madhya Pradesh 452010</p>
                       
            </div>
        </div>
      </div>
    </div>
    </div>
</section>
  )
}

export default Contact