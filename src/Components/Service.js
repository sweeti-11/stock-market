import React from 'react'
import Footer from './Footer'
import './service.css'
import { BsFillStarFill } from "react-icons/bs";
import se from '../assest/serv.jpg'



const Service = () => {
  return (
    <div>
     <div className='mainContact'>
                <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">

                    <div className="container text-center py-5">
                        <h1 className="display-2 text-dark mb-4 animated slideInDown">Services</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                                <li className="breadcrumb-item text-dark" aria-current="page" >Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <section id="services-1" class="services-1 sections-bg">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Services</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>

        <div class="row gy-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-4 col-md-6">
            <div class="service-item  position-relative">
              <div class="icon">
                {/* <i class="bi bi-activity"></i> */}
                <BsFillStarFill className='fa-fade'/>
              </div>
              <h3>Nesciunt Mete</h3>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <BsFillStarFill className='fa-fade'/>
              </div>
              <h3>Eosle Commodi</h3>
              <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <BsFillStarFill className='fa-fade'/>
              </div>
              <h3>Ledo Markt</h3>
              <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <BsFillStarFill className='fa-fade'/>
              </div>
              <h3>Ledo Markt</h3>
              <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <BsFillStarFill className='fa-fade'/>
              </div>
              <h3>Asperiores Commodit</h3>
              <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <BsFillStarFill className='fa-fade'/>
              </div>
              <h3>Velit Doloremque</h3>
              <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
              <BsFillStarFill className='fa-fade'/>
              </div>
              <h3>Dolori Architecto</h3>
              <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
              {/* <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="service-2" className='service-2'>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-6'>
        <img src={se} alt="" className='img-fluid'></img>
        </div>
        <div class="col-lg-6 d-flex justify-content-center flex-column aos-init aos-animate" data-aos="fade-up">
            <h3>Sunt consequatur ad ut est nulla</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i class="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i class="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i class="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
            </ul>
            {/* <a href="#" class="btn btn-get-started align-self-start">Get Started</a> */}
          </div>
    </div>


    </div>

    </section>
    <Footer/>
    </div>
  )
}

export default Service