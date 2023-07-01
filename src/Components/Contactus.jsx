import React,{useEffect, useState} from 'react'
import Footer from './Footer'
import './Contactus.css';
import contactimg from '../assest/trade2.jpg';
import axios from 'axios';

function Contactus() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      const ContactUrl = "https://scripts.bulleyetrade.com/contact-email"
      const [inputs, setInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      const handleOnChange = (event) => {
        setInputs({
          ...inputs,
          [event.target.name]: event.target.value,
        });
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append('name', inputs.name);
        formData.append('email', inputs.email);
        formData.append('subject', inputs.subject);
        formData.append('message', inputs.message);
        console.log(inputs)
        axios.post(ContactUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',  
          },
         
        }
        ).then(async (response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error);
        });
    
      };  
     
    return (
        <>
        

            {/* <!-- Page Header Start --> */}
            <div className='mainContact'>
                <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">

                    <div className="container text-center py-5">
                        <h1 className="display-2 text-dark mb-4 animated slideInDown">Contact Us</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                                <li className="breadcrumb-item text-dark" aria-current="page" >Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            {/* <!-- Page Header End --> */}

            <div className="container-xxl contact py-5">
                <div className="container">


                    <div class="row contact_icon">
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <img className="img-fuild" src={contactimg} alt="contactimg" />

                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6">
                            <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >


                                <h1 className="display-6">
                                You Have Any Query Please Contact Us?
                                </h1>
                            </div>
                            <div className=" text-center wow fadeInUp" data-wow-delay="0.3s">
                                <div className='d-flex'>
                                    <div className="btn-square">
                                        <i className="fa fa-envelope fa text-black "></i>
                                    </div>
                                    <p className="text-mob">bullseyebroking68@gmail.com</p>
                                </div>
                            </div>
                            {/* <div className=" text-center wow fadeInUp" data-wow-delay="0.4s">
                                <div className='d-flex'>
                                    <div className="btn-square">
                                        <i className="fa fa-phone fa text-white"></i>
                                    </div>
                                    <p className="">+91&nbsp;7880020088</p>
                                </div>
                            </div> */}
                            <div className="wow fadeInUp" data-wow-delay="0.5s">
                                <div className='d-flex'>
                                    <div className="btn-square ">
                                    <i className="fa fa-map-marker-alt  text-black test"></i>
                                    </div>
                                    <p className="text-my"> 42/9, Mhatre Bridge, Opp. Siddhi Gardens,Vakil Nagar,Pune, Maharashtra, 411052
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-4">Get In Touch With Us</h3>
                            {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" name='name' placeholder="Your Name"  value={inputs.name}
                                             onChange={handleOnChange} required/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" name='email' id="email" placeholder="Your Email"  value={inputs.email}
                                              onChange={handleOnChange} required/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name='subject' id="subject" placeholder="Subject"  value={inputs.subject}
                                             onChange={handleOnChange} required/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                             <textarea className="form-control" name='message' placeholder="Leave a message here" id="message" style={{ height: "120px" }}  value={inputs.message}
                                                    onChange={handleOnChange} required></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                {/* <iframe className="w-100 rounded"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.95666576076337!2d75.8839246070868!3d22.753998346949263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a696381cff%3A0xe70b82f31f2cc447!2sShekher%20Residency%2C%20MR%2010%20Rd%2C%20Vijay%20Nagar%2C%20Scheme%2054%20PU4%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1684307055792!5m2!1sen!2sin"
                                    frameborder="0" style={{ height: "100%", minHeight: "300px", border: "0" }} allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe> */}
                                    <iframe  className="w-100 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.53678078838!2d73.83492027436743!3d18.504629869662605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff4c9b44291%3A0x227b0ece46210c0a!2s42%2C%20Mhatre%20Bridge%2C%20Dattawadi%2C%20Pune%2C%20Maharashtra%20411030!5e0!3m2!1sen!2sin!4v1687782187197!5m2!1sen!2sin" frameborder="0" style={{ height: "100%", minHeight: "300px", border: "0" }} allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contactus;