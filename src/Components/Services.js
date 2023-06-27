import React from 'react'
import './services.css'
import team1 from '../assest/backofc.jpg'
import team2 from '../assest/service1.jpg'
import team3 from '../assest/service2.jpg'
import team4 from '../assest/service3.jpg'
import team5 from '../assest/tradingg.jpg'
import team6 from '../assest/payment.jpg'
import team7 from '../assest/trad.jpg'

import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsCurrencyRupee} from 'react-icons/bs'
const Services = () => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container">

          <div className="section-title text-center">
            <h2 className>Our Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              {/*  <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
  </div>*/}

              <div className="team_member">
                <img src={team1} alt="team" />
                <div className="overlay">
                  <h3><span>24/7 Online Support</span></h3>
                  <p> Our clients can get advice and find responses to questions quickly 24/7 and in real-time.</p>
                  {/* <ul className="team_social">
                    <li><a href="#"><i >{<BsFacebook/>}</i></a></li>
                    <li><a href="#"><i >{<AiOutlineTwitter/>}</i></a></li>
                    <li><a href="#"><i>{<BsInstagram/>}</i></a></li>
                    <li><a href="#"><i>{<BsLinkedin/>}</i></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              {/* <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="">Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div> */}
              <div className="team_member">
                <img src={team2} alt="team" />
                <div className="overlay">
                  <h3><span>Sms Service</span></h3>
                  <p>Our SMS customer service platform raises support options for
                     our clients.</p>
                  {/* <ul className="team_social">
                    <li><a href="#"><i>{<BsFacebook/>}</i></a></li>
                    <li><a href="#"><i>{<AiOutlineTwitter/>}</i></a></li>
                    <li><a href="#"><i>{<BsInstagram/>}</i></a></li>
                    <li><a href="#"><i>{<BsLinkedin/>}</i></a></li>
                  </ul> */}
                </div>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              {/* <div className="icon-box">
                <div className="icon"><i className="bx bx-tachometer"></i></div>
                <h4><a href="">Magni Dolores</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div> */}

              <div className="team_member">
                <img src={team3} alt="team" />
                <div className="overlay">
                  <h3><span>Sure Advisory Calls</span></h3>
                  <p> We provide all information to our clients via Advisory Calls</p>
                  {/* <ul className="team_social">
                    <li><a href="#"><i>{<BsFacebook/>}</i></a></li>
                    <li><a href="#"><i>{<AiOutlineTwitter/>}</i></a></li>
                    <li><a href="#"><i>{<BsInstagram/>}</i></a></li>
                    <li><a href="#"><i>{<BsLinkedin/>}</i></a></li>
                  </ul> */}
                </div>
              </div>
            </div>

            
              {/* <div className="icon-box">
                <div className="icon"><i className="bx bx-world"></i></div>
                <h4><a href="">Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div> */}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="team_member">
                <img src={team4} alt="team" />
                <div className="overlay">
                  <h3><span>Exceutive Support </span></h3>
                  <p> We have high-level experienced trading executives for client support always.</p>
                  {/* <ul className="team_social">
                    <li><a href="#"><i>{<BsFacebook/>}</i></a></li>
                    <li><a href="#"><i>{<AiOutlineTwitter/>}</i></a></li>
                    <li><a href="#"><i>{<BsInstagram/>}</i></a></li>
                    <li><a href="#"><i>{<BsLinkedin/>}</i></a></li>
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              {/* <div className="icon-box">
                <div className="icon"><i className="bx bx-slideshow"></i></div>
                <h4><a href="">Dele cardo</a></h4>
                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
              </div> */}
              <div className="team_member">
                <img src={team5} alt="team" />
                <div className="overlay">
                  <h3><span>Trade Or Call</span></h3>
                  <p> Call On Trade is a facility that allows you to trade in the stock markets using your registered mobile phone with our executive.</p>
                  {/* <ul className="team_social">
                    <li><a href="#"><i>{<BsFacebook/>}</i></a></li>
                    <li><a href="#"><i>{<AiOutlineTwitter/>}</i></a></li>
                    <li><a href="#"><i>{<BsInstagram/>}</i></a></li>
                    <li><a href="#"><i>{<BsLinkedin/>}</i></a></li>
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              {/* <div className="icon-box">
                <div className="icon"><i className="bx bx-arch"></i></div>
                <h4><a href="">Divera don</a></h4>
                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
              </div> */}
              <div className="team_member">
                <img src={team6} alt="team" />
                <div className="overlay">
                  <h3><span>Payin Payout</span></h3>
                  <p> Payin and Payouts are the days when brokers and exchanges make payments or delivery the securities.</p>
                  {/* <ul className="team_social">
                    <li><a href="#"><i>{<BsFacebook/>}</i></a></li>
                    <li><a href="#"><i >{<AiOutlineTwitter/>}</i></a></li>
                    <li><a href="#"><i>{<BsInstagram/>}</i></a></li>
                    <li><a href="#"><i>{<BsInstagram/>}</i></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              {/* <div className="icon-box">
                <div className="icon"><i className="bx bx-arch"></i></div>
                <h4><a href="">Divera don</a></h4>
                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
              </div> */}
              <div className="team_member">
                <img src={team7} alt="team" />
                <div className="overlay">
                  <h3><span>Brokerage Fee</span></h3>
                  <p> Our brokerage fee per trade is flat 10/- for every our clients.</p>
                  {/* <ul className="team_social">
                    <li><a href="#"><i >{<BsFacebook/>}</i></a></li>
                    <li><a href="#"><i>{<AiOutlineTwitter/>}</i></a></li>
                    <li><a href="#"><i>{<BsInstagram/>}</i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="#"><i >{<BsInstagram/>}</i></a></li>
                  </ul> */}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Services