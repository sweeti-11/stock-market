import React,{useEffect}from 'react'
import './MilkTea.css';
import Footer from './Footer'
import Chaywalaspecial from '../assest/Chaywalaspecialimge.png'
import Blacksalt from '../assest/BlackSaltTea.png'
import Gingertea from '../assest/GingerTea.png'
import Chocolatetea from '../assest/ChocolateTeaimg.png'
import Elachitea from '../assest/ElaichiTea.png'
import Clovetea from '../assest/CloveTea.png'
import Masalatea from '../assest/MasalaTea.png'
import { motion } from 'framer-motion';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const MilkTea = () => {
     useEffect(() => {
          window.scrollTo(0, 0)
        }, [])
     return (
          <div>        {/* <!-- Page Header Start --> */}
               <div className='mainMilkTea'>
                    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                         <div className="container text-center py-5">
                              <h1 className="display-2 text-dark mb-4 animated slideInDown MilkTeaColor">Milk Tea Special</h1>
                              <nav aria-label="breadcrumb animated slideInDown">
                                   {/* <ol className="breadcrumb justify-content-center mb-0">
                                  </ol> */}
                              </nav>
                         </div>
                    </div>
               </div>

               {/* <!-- Page Header End --> */}


               {/* <!-- Milk Tea Menu start --> */}
               <div className="container MilkTeaContainer" >
                    <motion.div className='testcls'
                         animate={{ x: 10, scale: 1 }}
                         initial={{ scale: 0 }}
                         transition={{ duration: 1 }}
                    >
                         <div className="container-fluid">
                              <div className="jumbotron"></div>
                              <div className="row">
                                   <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 1.1 }}
                                        // drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        className="col-sm-6 col-md-4 col-lg-4">
                                        <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }}>
                                             <img src={Chaywalaspecial} className="card-img-top" alt="..." loading='lazy'/>
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CHAYWALA SPECIAL TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />12/-</h4>

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
                                             <img src={Blacksalt} className="card-img-top" alt="..." loading='lazy'/>
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>BLACK SALT TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>

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
                                             <img src={Gingertea} className="card-img-top" alt="..." loading='lazy'/>
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>GINGER TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>

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
                                             <img src={Chocolatetea} className="card-img-top" alt="..." loading='lazy'/>
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CHOCOLATE TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>
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
                                             <img src={Elachitea} className="card-img-top" alt="..." loading='lazy'/>
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>ELAICHI TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>
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
                                             <img src={Clovetea} className="card-img-top" alt="..." loading='lazy' />
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>CLOVE TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>
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
                                             <img src={Masalatea} className="card-img-top" alt="..." loading='lazy' />
                                             <div className="card-body">
                                                  <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>MASALA TEA</h4>
                                                  <h4 className="card-price" style={{ color: 'white', textAlign: 'center' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />15/-</h4>
                                             </div>
                                        </div>
                                   </motion.div>
                              </div>
                         </div>
                    </motion.div>
               </div>
               {/* <!--Milk Tea Menu End--> */}
               <Footer />
          </div>
     )
}

export default MilkTea;