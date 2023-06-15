// Milk tea
import Chaywalaspecial from '../assest/Chaywalaspecialimge.png'
import Blacksalt from '../assest/BlackSaltTea.png'
import Gingertea from '../assest/GingerTea.png'
import Chocolatetea from '../assest/ChocolateTeaimg.png'
import Elachitea from '../assest/ElaichiTea.png'
import Clovetea from '../assest/CloveTea.png'
import Masalatea from '../assest/MasalaTea.png'


// Delight tea
import RoseTea from '../assest/Roseteaimg.png'
import Kesarilachitea from '../assest/Kesarilachiteaimg.png'
import Jaggerytea from '../assest/Jaggeryteaimg.png'
import MalaiTea from '../assest/Malaiteaimg.png'
import TulsiTea from '../assest/Tulsiteaimg.png'

// Herble tea with milk
import Aayurveditea from '../assest/Aayurvedicteaimg.png'
import Sugarfreetea from '../assest/Sugarfreeteaimg.png'
import Brownsugartea from '../assest/Brownsugarteaimg.png'

// Herble tea without milk
import Lemontea from '../assest/LemonTea.png'
import Blacktea from '../assest/BlackTeaimg.png'
import Greentea from '../assest/GreenTea.png'
import Brownsugarblacktea from '../assest/BrownSugarBlackTea.png'
import Sugarfreeblacktea from '../assest/SugarFreeBlackTea.png'

// Hot coffee
import Hotflatwhitecoffee from '../assest/HotFlatWhiteCoffee.png'
import Chocolatecoffee from '../assest/ChocolateCoffee.png'
import Expressocoffee from '../assest/ExpressoCoffee.png'
import Cappocinnocoffee from '../assest/Cappocinnocoffeeimge.png'
import Expressocreamycoffee from '../assest/ExpressoCreamyCoffee.png'
import Blackcoffeeimge from '../assest/Blackcoffeeimge.png'

// cold coffee
import Chocolateexpressocoffee from '../assest/Chocolateexpressocoffeimge.png'
import Icedexpressocoffee from '../assest/IcedExpressocoffeimg.png'
import Coldcoffee from '../assest/ColdCoffeeimg.png'
import Creamyicedcoffee from '../assest/CremyIcedCoffee.png'
import Cappucinnocoldicedcoffee from '../assest/Cappucinnocoldimge.png'

import Footer from './Footer';
import './Gallery.css';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';


const Gallery = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div>
      {/* <!-- Page Header Start --> */}
      <div className='mainGallery' >
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">

          <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 //animated slideInDown">Our Gallery</h1>
            <nav aria-label="breadcrumb //animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item text-dark" aria-current="page">Image Gallery</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <div className="container" style={{paddingTop:'30px'}} >
     
        {/* <!-- Gallery --> */}


        {/* <!-- bootstrap image gallery 1 --> */}
        <motion.div className='testcls'
          animate={{ x: 10, scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container-fluid">
            <div className="jumbotron">
            </div>
            {/* Milk tea special menu start */}
            <div className="row">
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={Chaywalaspecial} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CHAYWALA SPECIAL TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={Blacksalt} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>BLACK SALT TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',backgroundColor: '#7ED957' }}>
                  <img id="image" src={Gingertea} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>GINGER TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
               
               whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={Chocolatetea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CHOCOLATE TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}

                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={Elachitea} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>ELAICHI TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img id="image" src={Clovetea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CLOVE TEA</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}

                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }} >
                  <img id="image" src={Masalatea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>MASALA TEA</h4>
                  </div>
                </div>
              </motion.div>


              {/* Milk tea special menu end */}


              {/* Delight of milk tea menu start */}
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }}>
                  <img id="image" src={RoseTea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>ROSE TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={Kesarilachitea} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>KESAR ELAICHI TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img id="image" src={Jaggerytea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>JAGGERY TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img id="image" src={MalaiTea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>MALAI TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img id="image" src={TulsiTea} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>TULSI TEA</h4>
                  </div>
                </div>
              </motion.div>


              {/* Delight of milk tea menu end */}



              {/* Herbal Tea with milk menu start */}

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img id="image" src={Aayurveditea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>AYURVEDIC TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px', backgroundColor: '#7ED957' }} >
                  <img id="image" src={Sugarfreetea} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>SUGER FREE TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img id="image" src={Brownsugartea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>brown sugar tea</h4>
                  </div>
                </div>
              </motion.div>

              {/* Herbal Tea with milk menu end */}


              {/* Herbal tea without milk menu start */}


              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }} >
                  <img src={Lemontea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>LEMON TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }} >
                  <img id="image" src={Blacktea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Black TEA</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }} >
                  <img src={Greentea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>green tea</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px', backgroundColor: '#7ED957' }}>
                  <img src={Brownsugarblacktea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Brown sugar black tea</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px', backgroundColor: '#7ED957' }} >
                  <img src={Sugarfreeblacktea} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>sugar free black tea</h4>
                  </div>
                </div>
              </motion.div>


              {/* Herbal tea without milk menu end */}

              {/* Hot Coffee Menu start */}

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }} >
                  <img src={Hotflatwhitecoffee} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>hot flat white coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }}>
                  <img src={Chocolatecoffee} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>chocolate coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img src={Expressocoffee} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>expresso coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }} >
                  <img src={Cappocinnocoffee} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>cappucinno coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }} >
                  <img src={Expressocreamycoffee} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Expresso creamy coffee</h4>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img src={Blackcoffeeimge} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>black coffee</h4>
                  </div>
                </div>
              </motion.div>



              {/* Hot Coffee Menu End */}



              {/* Cold Coffee Menu Start */}

              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}

                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img src={Chocolateexpressocoffee} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '20px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>chocolate expresso coffee</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }} >
                  <img src={Icedexpressocoffee} className="card-img-top" alt="..."  loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Iced Expresso Coffee</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }}>
                  <img src={Coldcoffee} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Cold coffee</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img src={Creamyicedcoffee} className="card-img-top" alt="..."  loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>creamy iced coffee</h4>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                // drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="col-sm-6 col-md-4 col-lg-4">
                <div className="card" style={{marginTop:'20px',  backgroundColor: '#7ED957' }}>
                  <img src={Cappucinnocoldicedcoffee} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ fontSize: '21px', color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>cappucinno cold iced coffee</h4>
                  </div>
                </div>
              </motion.div>


              {/*Cold Coffee Menu End */}

            </div>
          </div>
        </motion.div>
      </div>
      <Footer />

    </div >
  )
}

export default Gallery