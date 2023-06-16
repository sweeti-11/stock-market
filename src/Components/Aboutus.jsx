import React, { useEffect } from 'react'
import slide from '../assest/slider1.jpg';
import Footer from './Footer'
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Aboutus = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    useEffect(() => {
        AOS.init({
            duration: 500, // Set the animation duration (in milliseconds)
            once: true, // Apply the animation only once
            offset: 200, // Set the offset (in pixels) for when the animation should trigger
            delay: 100, // Set the delay (in milliseconds) before the animation starts
        });
    }, []);

  return (
    <div>

    {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
    </div> */}
    {/* <!-- Spinner End --> */}

    
    {/* <!-- Navbar Start --> */}
    {/* <div className="container-fluid bg-white sticky-top">
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
            <a href="index.html" className="navbar-brand">
                <img className="img-fluid" src={logo} alt="Logo"/>
            </a>
            <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/aboutus" className="nav-item nav-link">ABout</Link>
                    <Link to="/gallary" className="nav-item nav-link">Gallary</Link>
                    <div className="nav-item dropdown">
                        <Link to="/tea" className="nav-link " data-bs-toggle="dropdown">Types of Tea</Link>
                         <div className="dropdown-menu bg-light rounded-0 m-0 text-dark">
                            <a href="feature.html" className="dropdown-item">Milk Tea Speical</a>
                            <a href="blog.html" className="dropdown-item">Delight of Milk Special</a>
                            <a href="testimonial.html" className="dropdown-item">Herbal Tea with milk</a>
                            <a href="404.html" className="dropdown-item">Hot coffie</a>
                            <a href="404.html" className="dropdown-item">Cold Coffie</a>
                        </div>
                    </div>
                    <Link to="/contactus" className="nav-item nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    </div>
</div> */}
    {/* <!-- Navbar End --> */}

    {/* <!-- Page Header Start --> */}
    <div className='mainAboutus'>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    
        <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown" >About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                    <li className="breadcrumb-item text-dark" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
    </div>
    
    {/* <!-- Page Header End --> */}


    {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6" style={{marginRight:'-80px'}}>
                    <div className="row g-3">
                        <div className="col-6 text-end" style={{width:'470px'}}>
                        <motion.img 
                                 whileHover={{ scale: 1.1 }}
                                // transition={{duration:1.2}}
                                className="img-fluid bg-white w-100 mb-3 " data-aos="zoom-in-up" src={slide} alt=""  />
                                {/* <motion.img 
                                 whileHover={{ scale: 1.1}}
                               //  transition={{ duration: 3 }}
                                // transition={{duration:1.2}}
                                className="img-fluid bg-white w-50 " src={about2} alt="" data-aos="zoom-in-up" /> */}
                        </div>
                        {/* <div className="col-6">
                        <motion.img 
                                 whileHover={{ scale: 1.1}}
                                // transition={{duration:1.2}}
                                className="img-fluid bg-white w-50 mb-3 wow fadeIn"  src={about3} alt="" data-aos="zoom-in-up" />
                                <motion.img 
                                 whileHover={{ scale: 1.1}}
                                // transition={{duration:1.2}}
                                className="img-fluid bg-white w-100 wow fadeIn"  src={about4} alt="" data-aos="zoom-in-up" />
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-aos="fade-left" data-aos-offset="500"
                        data-aos-duration="500">
                    <div className="section-title">
                        {/* <p className="fs-5 fw-medium fst-italic text-primary">About Us</p> */}
                        <h1 className="display-6" style={{fontFamily:'serif'}}> 
                        You Read About Stock Market
                        </h1>
                    </div>
                    <div className="row g-3 mb-4">
                        {/* <div className="col-sm-4">
                            <img className="img-fluid bg-white w-100" src={about5} alt=""/>
                        </div> */}
                        <div className="col-sm-8" style={{width:"max-content",marginTop:'30px'}}>
                            {/* <h5>Our tea is one of the most popular drinks in the world</h5> */}
                            <p className="mb-0" style={{fontFamily:'sans-serif'}}><b style={{color:'green'}}>Stock Market</b> is a fastest growing brand in India. This is not only brand of product, it is the brand of service, quality and our thought. Hence we sell SERVICE, QUALITY and THOUGHT to customer. Our SERVICE belongs to actual nature of Indian culture while our QUALITY is based on our Indian product. And about THOUGHT, this is our sense of humanity which is going down due to our selflessness. </p>
                            <br/>
                            <p className="mb-0" style={{fontFamily:'sans-serif'}}><b style={{color:'green'}}>Stock Market</b> is a cafés leading channel which provide independent self-employment to our youngster to achieve their career. It promotes our relevant Indian product to maintain our forming. Maximum youth likes our brand because we work as a family members. Yes, our foods list may belong to western style but our service and staff behaviour shows that we are Indian. 
                            So let’s come with us, start your own food business at a very low cost and in your city. Give your 100% presence in your work, we promise that you will achieve your career target and will provide employment to maximum person.</p>
                        </div>
                    </div>
                    {/* <div className="border-top mb-4"></div> */}
                    {/* <div className="row g-3"> */}
                        {/* <div className="col-sm-8" style={{width:"max-content"}}> */}
                            {/* <h5>Daily use of a cup of tea is good for your health</h5> */}
                            {/* <p className="mb-0">The Chay Wala is a cafés leading channel which provide independent self-employment to our youngster to achieve their career. It promotes our relevant Indian product to maintain our forming. Maximum youth likes our brand because we work as a family members. Yes, our foods list may belong to western style but our service and staff behaviour shows that we are Indian. 
So let’s come with us, start your own food business at a very low cost and in your city. Give your 100% presence in your work, we promise that you will achieve your career target and will provide employment to maximum person.</p> */}
                        {/* </div> */}
                        {/* <div className="col-sm-4">
                            <img className="img-fluid bg-white w-100" src={about6} alt=""/>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Footer Start --> */}
    {/* <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Our Office</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>&nbsp;&nbsp;&nbsp;123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>&nbsp;&nbsp;&nbsp;+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>&nbsp;&nbsp;&nbsp;info@example.com</p>
                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Business Hours</h4>
                    <p className="mb-1">Monday - Sunday</p>
                    <h6 className="text-light">07:00 am - 11:00 pm</h6>
                
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-primary mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative w-100">
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Footer End --> */}


    {/* <!-- Copyright Start --> */}
    {/* <div className="container-fluid copyright py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="fw-medium" href="#">Your Site Name</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                   
                    <a className="fw-medium" href="https://htmlcodex.com">HTML Codex</a>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Copyright End --> */}
    <section id="about" class="about">
      <div class="container-fluid">

        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
          </div>

          <div class="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-atom"></i></div>
              <h4 class="title"><a href="">Dine Pad</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    <Footer/>
  
    {/* <!-- JavaScript Libraries --> */}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="tea-shop-website-template/lib/wow/wow.min.js"></script>
    <script src="tea-shop-website-template/lib/easing/easing.min.js"></script>
    <script src="tea-shop-website-template/lib/waypoints/waypoints.min.js"></script>
    <script src="tea-shop-website-template/lib/owlcarousel/owl.carousel.min.js"></script>

    {/* <!-- Template Javascript --> */}
    <script src="js/main.js"></script>


    </div>
  )
}

export default Aboutus;