import React,{useEffect} from "react";
import Footer from "./Footer";
import hold from "../assest/stocks.webp";
import "./holding.css";
import AOS from 'aos'
import {AiOutlineStock} from "react-icons/ai";
import {RiStockLine} from "react-icons/ri"
import {GiStockpiles, GiGunStock} from "react-icons/gi"

const Holding = () => {
  useEffect(() => {
    AOS.init();
    AOS.init({ disable: 'mobile'});
}, [])
  return (
    <div>
      <div className="mainContact">
        <div
          className="container-fluid page-header py-5 mb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown">
              Holdings
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                <li className="breadcrumb-item text-dark" aria-current="page">
                  Holdings
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section id="holding" className="holding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={hold} alt="" className="img-fluid" data-aos="flip-left"></img>
            </div>
            <div className="col-lg-6" data-aos="fade-up"
     data-aos-duration="3000">
              <h3>What Is Holdings Stock?</h3>
              <p>
                Stocks are certificates that represent part ownership of a
                company. Stock holdings point out the number of stocks or
                shares, that a client or institution owns in a company. By
                holding stock, you can grow financial benefits and also have a
                say in how the company is run.{" "}
              </p>
              <p>
                These make up an allocation of an investment portfolio,
                alongside futures, bonds, mutual funds, and other capital.
                Individually these are an investment that can raise in value,
                generating an income for the holder.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="services-holding" class="services-holding section-bg">
        <div class="container aos-init aos-animate" data-aos="fade-up">
          <div class="section-title">
            <h2>The most common strategies used in Holdings stock</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div class="row">
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <div class="icon">
                  {/* <i class="bx bxl-dribbble"></i> */}
                  <GiStockpiles/>
                </div>
                <h4>
                  <a href="">Pure Holdings</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <div class="icon">
                  {/* <i class="bx bx-file"></i> */}
                 <GiStockpiles/>
                </div>
                <h4>
                  <a href="">Mixed Holdings</a>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon">
                  {/* <i class="bx bx-tachometer"></i> */}
                  <GiStockpiles/>
                </div>
                <h4>
                  <a href="">Immediate Holdings</a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box">
                <div class="icon">
                  {/* <i class="bx bx-layer"></i> */}
                  <GiStockpiles/>
                </div>
                <h4>
                  <a href="">Intermediate Holdings</a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="about">
        <div class="container-fluid">
          <div class="row justify-content-center" data-aos="zoom-out-down">
            <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative" >
              {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a> */}
            </div>

            <div class="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>The types of Holdings stock</h3>
              {/* <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p> */}

              <div class="icon-box">
                <div class="icon">
                  {/* <i class="bx bx-fingerprint"></i> */}
                  <AiOutlineStock/>
                </div>
                <h4 class="title">
                  <a href="">Common stock</a>
                </h4>
                <p class="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div class="icon-box">
                <div class="icon">
                  {/* <i class="bx bx-gift"></i> */}
                  <RiStockLine/>
                </div>
                <h4 class="title">
                  <a href="">Preferred stock</a>
                </h4>
                <p class="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>

              {/* <div class="icon-box">
              <div class="icon"><i class="bx bx-atom"></i></div>
              <h4 class="title"><a href="">Dine Pad</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <section id="holding-stock" class="holding-stock">
        <div
          class="container section-title aos-init aos-animate"
          data-aos="fade-up"
        >
          <h2>Benefits of holding stock</h2>
          {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
        </div>
        <div class="container">
          <div class="row gy-4">
            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0">
                  {/* <i class="bi bi-briefcase"></i> */}
                  <GiGunStock/>
                </div>
                <div>
                  <h4 class="title">
                    <a href="#" class="stretched-link">
                      Less Costly
                    </a>
                  </h4>
                  <p class="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0">
                  {/* <i class="bi bi-card-checklist"></i> */}
                  <GiGunStock/>
                </div>
                <div>
                  <h4 class="title">
                    <a href="#" class="stretched-link">
                      Minor tax rates
                    </a>
                  </h4>
                  <p class="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0">
                  {/* <i class="bi bi-bar-chart"></i> */}
                  <GiGunStock/>
                </div>
                <div>
                  <h4 class="title">
                    <a href="#" class="stretched-link">
                      Lower commissions
                    </a>
                  </h4>
                  <p class="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0">
                  {/* <i class="bi bi-binoculars"></i> */}
                  <GiGunStock/>
                </div>
                <div>
                  <h4 class="title">
                    <a href="#" class="stretched-link">
                      Compounded returns
                    </a>
                  </h4>
                  <p class="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0">
                  {/* <i class="bi bi-brightness-high"></i> */}
                  <GiGunStock/>
                </div>
                <div>
                  <h4 class="title">
                    <a href="#" class="stretched-link">
                      Ride Out Highs and Lows
                    </a>
                  </h4>
                  <p class="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="service-item d-flex">
                <div class="icon flex-shrink-0">
                  {/* <i class="bi bi-calendar4-week"></i> */}
                  <GiGunStock/>
                </div>
                <div>
                  <h4 class="title">
                    <a href="#" class="stretched-link">
                      Better Long-Term Returns
                    </a>
                  </h4>
                  <p class="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Holding;
