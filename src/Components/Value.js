import React from 'react'
import './value.css'

const Value = () => {
  return (
    <div>
         <section className="value-section" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="about-us-header text-center">
                            <h2>Our Values</h2>
                            <p className='sub-heading'>Our values are not just plastered on the wall, but define the way we do our business and interact with all our stakeholders. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 width-50">
                        <div className="value-main-section" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="value-image">
                                {/* <img  src={require("../assest/intradaybg.jpg")} alt="straightforward" className="img-responsive"/> */}
                            </div>
                            <h4>Straightforward</h4>
                            <p>We are open and transparent with our customers and with each other</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 width-50">
                        <div className="value-main-section" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="value-image">
                                {/* <img src={require("../assest/intradaybg.jpg")} alt="humable" className="img-responsive"/> */}
                            </div>
                            <h4>Humble</h4>
                            <p>We seek and value feedback to serve you better and get better everyday</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 width-50">
                        <div className="value-main-section" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="value-image">
                                {/* <img src={require("../assest/intradaybg.jpg")} alt="your-first" className="img-responsive"/> */}
                            </div>
                            <h4>You first</h4>
                            <p>Keeping our clients first – because they are at the heart of everything we do</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 width-50">
                        <div className="value-main-section" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="value-image">
                                {/* <img src={require("../assest/intradaybg.jpg")} alt="gritty" className="img-responsive"/> */}
                            </div>
                            <h4>Gritty</h4>
                            <p>We constantly work towards creating value for our clients through objective advice</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 width-50">
                        <div className="value-main-section" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="value-image">
                                {/* <img src={require("../assest/intradaybg.jpg")} alt="curious" className="img-responsive"/> */}
                            </div>
                            <h4>Curious</h4>
                            <p>We are constantly learning and improving to enhance client experience through innovation</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 width-50">
                        <div className="value-main-section" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="value-image">
                                {/* <img src={require("../assest/intradaybg.jpg")} alt="simplicity" className="img-responsive"/> */}
                            </div>
                            <h4>Simplicity</h4>
                            <p>Making investments simple, understandable and accessible to everyone</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Value