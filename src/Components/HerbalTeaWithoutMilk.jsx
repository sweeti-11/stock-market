import React,{useEffect} from 'react'
import './HerbalTeaWithoutMilk.css';
import Footer from './Footer'
import Lemontea from '../assest/LemonTea.png'
import Blacktea from '../assest/BlackTeaimg.png'
import Greentea from '../assest/GreenTea.png'
import Brownsugarblacktea from '../assest/BrownSugarBlackTea.png'
import Sugarfreeblacktea from '../assest/SugarFreeBlackTea.png'

import { motion } from 'framer-motion';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const HerbalTeaWithoutMilk = () => {

     useEffect(() => {
          window.scrollTo(0, 0)
        }, [])
     return (
          <div>
               {/* <!-- Page Header Start --> */}
               <div className='mainHerbaleWithoutmilk'>
                    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                         <div className="container text-center py-5">
                              <h1 className="display-2 text-dark mb-4 animated slideInDown HerbleWithoutColor">Herbal Tea Without Milk</h1>
                              <nav aria-label="breadcrumb animated slideInDown">
                                   <ol className="breadcrumb justify-content-center mb-0">
                                        {/* <li className="breadcrumb-item"><a href="/">Home</a></li> */}
                                        {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                                        {/* <li className="breadcrumb-item text-dark" aria-current="page">HerbalTeaWithoutMilk</li> */}
                                   </ol>
                              </nav>
                         </div>
                    </div>
               </div>
               {/* <!-- Page Header End --> */}


               {/* <!-- Hearbal tea without start--> */}
               <div className="container HerbaleWithouContainer" >
                    <motion.div className='testcls'
                         animate={{ x: 10, scale: 1 }}
                         initial={{ scale: 0 }}
                         transition={{ duration: 1 }}
                    >
                         <div className="row">
                              <motion.div
                                   whileHover={{ scale: 0.9 }}
                                   whileTap={{ scale: 1.1 }}
                                   // drag="x"
                                   dragConstraints={{ left: -100, right: 100 }}
                                   className="col-sm-6 col-md-4 col-lg-4">
                                   <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }} >
                                        <img src={Lemontea} className="card-img-top" alt="..." loading='lazy' />
                                        <div className="card-body">
                                             <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>lemon tea</h4>
                                             <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />20/-</h4>
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
                                        <img src={Blacktea} className="card-img-top" alt="..." loading='lazy' />
                                        <div className="card-body">
                                             <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>black tea</h4>
                                             <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />20/-</h4>
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
                                        <img src={Greentea} className="card-img-top" alt="..." loading='lazy'/>
                                        <div className="card-body">
                                             <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>green tea</h4>
                                             <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />25/-</h4>
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
                                        <img src={Brownsugarblacktea} className="card-img-top" alt="..." loading='lazy' />
                                        <div className="card-body">
                                             <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>brown sugar black tea</h4>
                                             <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />25/-</h4>
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
                                             <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>sugar free black tea</h4>
                                             <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />25/-</h4>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </motion.div>
               </div>
               {/* <!-- Herabl tee without end--> */}
               <Footer />
          </div>
     )
}

export default HerbalTeaWithoutMilk;