import React,{useEffect} from "react";
import Footer from "./Footer";
import hold from "../assest/defIntra.jpg";
import "./Intraday.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import {BsArrowUpRight} from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive';

const Intraday = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    window.scrollTo(0, 0)
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
             Intraday
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                <li className="breadcrumb-item text-dark" aria-current="page">
                Intraday
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section id="intraday" className="intraday">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos={isMobile ? undefined : "zoom-out-down"} data-aos-offset="500"
                        data-aos-duration="500">
              <img src={hold} alt="" className="img-fluid"></img>
            </div>
            <div className="col-lg-6" data-aos={isMobile ? undefined : "zoom-out-down"} data-aos-offset="500"
                        data-aos-duration="500">
              <h3>What Is Intraday?</h3>
              <p>
              Intraday means "within the day". Purchasing and selling stocks and other financial instruments exchanged on the same day is known as intraday trading. In other words, intraday trading means all positions are squared-off before the market closes and there is no change in ownership of shares as a result of the trades. This means that multiple trades can be completed within a single trading day. The primary purpose of transacting in this method is to realize capital gains on purchased securities as well as minimize risks by keeping money invested for an extended period.
              </p>
            
            </div>
          </div>
        </div>
      </section>
      <section id="services-intraday" className="services-intraday section-bg">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-title">
            <h2>The Most Common Strategies Used In Intraday</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div className="row">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                <i class="fa-solid fa-person-chalkboard"></i>
                </div>
                <h4>
                  <a href="">Range Trading.</a>
                </h4>
                <p>
                Range trading is an active investing strategy that determinesan area in which the investor buys and sells over a short period.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                <i class="fa-solid fa-person-chalkboard"></i>
                </div>
                <h4>
                  <a href="">News Trading</a>
                </h4>
                <p>
                A news trader is a trader or investor who makes decisions based on news announcements. Breaking news, economic reports, and other reported events can have a short-lived effect on the price action of stocks, bonds, and other securities
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                <i class="fa-solid fa-person-chalkboard"></i>
                </div>
                <h4>
                  <a href="">High-Frequency Trading</a>
                </h4>
                <p>
                High-frequency trading is algorithmic trading defined by high-speed trade execution, a highly large number of transactions, and very short-term investment.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                <i class="fa-solid fa-person-chalkboard"></i>
                </div>
                <h4>
                  <a href="">Scalp Trading Or Scalping</a>
                </h4>
                <p>
                Scalping is the shortest-term trading approach where investors use big trading volumes to make a profit rather than trying to raise profits for each trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="intraday" className="intraday">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative"  data-aos={isMobile ? undefined : "zoom-out-down"} data-aos-offset="500"
                        data-aos-duration="500" >
              {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a> */}
            </div>

            <div className="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h2 data-aos={isMobile ? undefined : "zoom-out-down"}  data-aos-offset="500"
                        data-aos-duration="500">Benefits Of Intraday Trading</h2>
              {/* <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p> */}

              <div className="icon-box" data-aos={isMobile ? undefined : "zoom-out-down"} data-aos-offset="500"
                        data-aos-duration="500">
                <div className="icon">
                <i class="fa-solid fa-hourglass-end"></i>
                </div>
                <h4 className="title">
                  <a href="">Ends The Overnight Risk</a>
                </h4>
                <p className="description">
                Overnight trading signifies buying and selling financial instruments between the hours when the stock market closes and opens the next day.
                </p>
              </div>

              <div className="icon-box" data-aos="zoom-in-up" data-aos-offset="500"
                        data-aos-duration="500">
                <div className="icon">
                <i class="fa-solid fa-sack-dollar"></i>
                </div>
                <h4 className="title">
                  <a href="">Provides Higher Returns</a>
                </h4>
                <p className="description">
                If you choose the right stock in intraday trading then it helps you earn higher profits from as low as 2% to as high as 60%.
                </p>
              </div>

              <div className="icon-box" data-aos="zoom-in-up" data-aos-offset="500"
                        data-aos-duration="500">
                <div className="icon">
                <i class="fa-solid fa-hand-holding-heart"></i>
                </div>
                <h4 className="title">
                  <a href="">Quadruple Leverage</a>
                </h4>
                <p className="description">
                Leverage means that they amplify the returns of a benchmark index by two or three times, properly.
                </p>
              </div>
              <div className="icon-box" data-aos="zoom-in-up" data-aos-offset="500"
                        data-aos-duration="500">
                <div className="icon">
                <i class="fa-solid fa-chalkboard-user"></i>
                </div>
                <h4 className="title">
                  <a href="">Great Opportunity To Learn</a>
                </h4>
                <p className="description">
                Stock Market Course&Technical Analysis Course for Traders to learn about trading.
                </p>
              </div>
              <div className="icon-box" data-aos="zoom-in-up" data-aos-offset="500"
                        data-aos-duration="500">
                <div className="icon">
                <i class="fa-solid fa-layer-group"></i>
                                </div>
                <h4 className="title">
                  <a href="">Multiple Trading Opportunities</a>
                </h4>
                <p className="description">
                There is no such bound on the number of shares you can buy in intraday. Multiple trades can be finished within a single trading day.
                </p>
              </div>

              {/* <div className="icon-box">
              <div className="icon"><i className="bx bx-atom"></i></div>
              <h4 className="title"><a href="">Dine Pad</a></h4>
              <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <section id="intraday-stock" className="intraday-stock">
        <div
          className="container section-title aos-init aos-animate"
          data-aos="fade-up"
        >
          <h2>How To Make Profits In Intraday Trading</h2>
          {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
        </div>
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <BsArrowUpRight/>
                  {/* <i className="bi bi-briefcase"></i> */}
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                    Opening Range Breakout (ORB)
                    </a>
                  </h4>
                  <p className="description">
                  The open range breakout strategy is one of the best strategies to create profits in the stock market, specially in intraday trading. The trading volume and volatility is high after the market opens. It generally cools after 30 or 45 mins.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  {/* <i className="bi bi-card-checklist"></i> */}
                  <BsArrowUpRight/>

                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                    Mapping Resistance And Support
                    </a>
                  </h4>
                  <p className="description">
                  Support: is the price level at which demand is thought to be strong enough to prevent the price from declining further.<br/>
                  Resistance: is the price level at which selling is thought to be strong enough to prevent the price from rising further
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  {/* <i className="bi bi-bar-chart"></i> */}
                  <BsArrowUpRight/>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                    Demand-Supply Imbalances
                    </a>
                  </h4>
                  <p className="description">
                  Sometimes, certain forces bring about a movement in the price of a commodity or service. When this happens the proportion of goods supplied to the proportion demanded becomes imbalanced, and the market for the product is said to be in a state of disequilibrium.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  {/* <i className="bi bi-binoculars"></i> */}
                  <BsArrowUpRight/>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                    3:1 Risk-Reward Ratio
                    </a>
                  </h4>
                  <p className="description">
                  In many cases, market strategists find the ideal risk/reward ratio for their investments to be approximately 1:3, or three units of expected return for every one unit of additional risk. Investors can manage risk/reward more directly through the use of stop-loss orders and derivatives such as put options.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  {/* <i className="bi bi-brightness-high"></i> */}
                  <BsArrowUpRight/>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                    Average Directional Index (ADX)
                    </a>
                  </h4>
                  <p className="description">
                  The average directional index (ADX) is a technical analysis indicator used by some traders to determine the strength of a trend. 
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  {/* <i className="bi bi-calendar4-week"></i> */}
                  <BsArrowUpRight/>
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                    Use Relative Strength Index (RSI)
                    </a>
                  </h4>
                  <p className="description">
                  RSI is often used to obtain an early sign of possible trend changes. Therefore, adding exponential moving averages (EMAs) that respond more quickly to recent price changes can help. Relatively short-term moving average crossovers, such as the 5 EMA crossing over the 10 EMA, are best suited to complement RSI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services-intraday" className="services-intraday section-bg">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-title">
            <h2>Special Feature Of Intraday Trading</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div className="row">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                <i class="fa-solid fa-sack-dollar"></i>
                </div>
                <h4>
                  <a href="">Regular Income</a>
                </h4>
                <p>
                If the client buys the right stock then the client can gain more profit and regular income.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                <i class="fa-solid fa-handshake"></i>
               </div>
                <h4>
                  <a href="">Good Liquidity</a>
                </h4>
                <p>
                Liquidity indicates the ability or ease with which a resource or security can be converted into ready cash without affecting its market price.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                <i class="fa-solid fa-hand-holding-dollar"></i>
                                </div>
                <h4>
                  
                  <a href="">Better Profits</a>
                </h4>
                <p>
                In Intraday Trading always think about generating short profits with various trades. This helps cut down the losses and achieve daily better profits.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                <i className="fa-solid fa-hand-lizard"></i>       
                  </div>
                <h4>
                  <a href="">Low Expenses</a>
                </h4>
                <p>
                In intraday trading,the lowest brokerage charges are as per executed order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Intraday;
