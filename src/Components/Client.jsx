import React from 'react'
import './Client.css'
import client1 from '../assest/client1.png'
import client2 from '../assest/client2.png'
import client3 from '../assest/client3.png'
import client4 from '../assest/client4.png'

const Client = () => {
  return (
    <div>
        <div className="section ">
      <div className="container">
        <div className="row md-m-25px-b m-40px-b justify-content-center text-center">
            <div className="col-lg-6">
                <h3 className="h1 m-15px-b">What Our Clients Says !</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-6">
                <div id="testimonial-slider" className="owl-carousel owl-theme" style={{opacity:"1",display:"block"}} >
                    <div className="owl-wrapper-outer"><div className="owl-wrapper"  style={{width:"2224px", left:"0px" , display:"flex" , transition:"all 1000ms ease 0s", transform:"translate3d(0px,0px,0px)"}}>
                        <div className="owl-item"  style={{width:"278px"}}><div className="testimonial">
                        <div className="pic">
                            <img src={client1} alt="client"/>
                        </div>
                        <p className="description">
                          Ideal stock only work for customer satisfaction. This is very good platform get good returns, I'm very thankful to Ideal Stock. My overall experience was good.
                        </p>
                        <ul className="test-star">
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                        <h3 className="title">Ravi Patel
                        </h3>
                    </div></div>
                    <div className="owl-item" style={{width:"278px"}} ><div className="testimonial">
                        <div className="pic">
                            <img src={client2} alt=""/>
                        </div>
                        <p className="description">
                          You people are doing work its amazing. I'm doing trading with the support of ideal stock company in index &amp; stock option your expiry calls are so good.
                        </p>
                        <h3 className="title">Aryan Patel
                        </h3>
                        <ul className="test-star">
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                    </div></div><div className="owl-item"  style={{width:"278px"}}><div className="testimonial">
                        <div className="pic">
                            <img src={client3}  alt=""/>
                        </div>
                        <p className="description">
                          ideal, provides daily market market upswing stocks which are effective. Good collaboration, i still need to explore more about the services as it has only 6 days so far.
                        </p>
                        <h3 className="title">Amit Tyagi
                        </h3>
                        <ul className="test-star">
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                    </div></div><div className="owl-item"  style={{width:"278px"}}><div className="testimonial">
                        <div className="pic">
                            <img src={client4}  alt=""/>
                        </div>
                        <p className="description">
                            I take a service in this company its good. They give most of the time good profitable call and employee of this company good discipline always speak ploite way.
                        </p>
                        <h3 className="title">Shanku Choudhary
                        </h3>
                        <ul className="test-star">
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                    </div></div></div></div>

                    
                    
                    
                <div className="owl-controls clickable"  style={{display:"none"}}><div className="owl-buttons"><div className="owl-prev"></div><div className="owl-next"></div></div></div></div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default Client