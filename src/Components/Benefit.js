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
              <p>Magnam dolores commodi suscipit nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
          {/* <div className="col-lg-4">
           
          </div> */}
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch ">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon"><PublicTwoTone/></div>
                  <h4><a href="">Lorem Ipsum</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200"  >
                  <div className="icon"><PublicTwoTone/></div>
                  <h4><a href="">Sed ut perspiciatis</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                  <div className="icon"><PublicTwoTone/></div>
                  <h4><a href="">Magni Dolores</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
                  <div className="icon"><PublicTwoTone/></div>
                  <h4><a href="">Nemo Enim</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
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