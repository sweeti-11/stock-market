import React from 'react'
import './Benefit.css'
import PublicTwoTone from '@mui/icons-material/PublicTwoTone';

const Benefit = () => {
  return (
    <div>
        <section id="benefits" className="benefits section-bg">
      <div className="container">
        <div className="row">
        <div className="section-title aos-init aos-animate text-center" data-aos="fade-right">
              <h2>Benefit</h2>
              <p></p>
            </div>
          {/* <div className="col-lg-4">
           
          </div> */}
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch ">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon"><PublicTwoTone/></div>
                  <h4><a href="">Protection against inflation</a></h4>
                  <p>Protection against inflation: As the demand for goods and services hikes, it leads to a boost in the price of the goods and services as the price of the raw materials i.e. commodities gains.</p>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200"  >
                  <div className="icon"><PublicTwoTone/></div>
                  <h4><a href="">Profitable Returns </a></h4>
                  <p>Profitable Returns : If the liquidity is huge the commodities are riskier in the form of expenses. Companies were possible to have either an extensive benefit or they can experience bulky losses.</p>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                  <div className="icon"><PublicTwoTone/></div>
                  <h4><a href="">Transparency </a></h4>
                  <p>Transparency :Trading is supposed to be a transparent process in commodity futures. The plan will lead you to have an equal price which in change is controlled by large-scale participation.</p>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
                  <div className="icon"><PublicTwoTone/></div>
                  <h4><a href="">Lower Margin </a></h4>
                  <p>Lower Margin : The trading fee for commodities is very less compared to another asset trading.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Benefit