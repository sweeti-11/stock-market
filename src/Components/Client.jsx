import React from 'react'
import './Client.css'
import client1 from '../assest/client1.png'
import client2 from '../assest/client2.png'
import client3 from '../assest/client3.png'
import client4 from '../assest/client4.png'

const Client = () => {
  return (    
    <div >
        <div className="clint-section " style={{marginTop:'20px'}}>
      <div className="container">
        <div className="row">
           
                <h3 className="h1 text-center what_text">What Our Clients Says !</h3>
            
                  <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                        <div className="owl-item" >
                          <div className="testimonial">
                        <div className="pic">
                            <img src={client1} alt="client"/>
                        </div>
                        <p className="description">
                          Investors are always keen to know the present market scenario. When they know of the present market trends, they can decide regarding their stock trading based on the information. Thank you for sharing such a comprehensive list.
                        </p>
                        <ul className="test-star">
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                        <h3 className="title">Aashish Jain
                        </h3>
                    </div>
                    </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <div className="owl-item"  >
                      <div className="testimonial">
                        <div className="pic">
                            <img src={client2} alt=""/>
                        </div>
                        <p className="description">
                          I enjoy the process of investing as I am well informed about the companies I am investing in. This is because of their analyst notes which keep me informed. As I matter of fact, I enjoy the process more than the outcome!
                        </p>
                        <h3 className="title">Vikram Sara Bhai
                        </h3>
                        <ul className="test-star">
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                    </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <div className="owl-item" >
                      <div className="testimonial">
                        <div className="pic">
                            <img src={client3}  alt=""/>
                        </div>
                        <p className="description">
                          Good Customer Service -Regular Updates -No need to refer any other website if you’re following them -They’ll help you to invest better and stay invested. They’ll guide from them beginning.
                        </p>
                        <h3 className="title">Ashok Patel
                        </h3>
                        <ul className="test-star">
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                    <div className="owl-item" >
                      <div className="testimonial">
                        <div className="pic">
                            <img src={client4}  alt=""/>
                        </div>
                        <p className="description">
                            It’s really helpful for me to know more about stock picking and investing. and I think who also wants to know about stocks and investing this website is beneficial for him.
                        </p>
                        <h3 className="title">Shubham Sanghi
                        </h3>
                        <ul className="test-star">
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                          <li><i className="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

    </div>
    </div>
    
  )
}

export default Client