import React,{useEffect} from 'react'
import './DelightMilkTea.css';
import Footer from './Footer'
import RoseTea from '../assest/Roseteaimg.png'
import Kesarilachitea from '../assest/Kesarilachiteaimg.png'
import Jaggerytea from '../assest/Jaggeryteaimg.png'
import MalaiTea from '../assest/Malaiteaimg.png'
import TulsiTea from '../assest/Tulsiteaimg.png'
import { motion } from 'framer-motion';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const DeligthMilkTea = () => {

   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
   return (
      <>
         {/* <!-- Page Header Start --> */}
         <div className='mainDelightofMilk'>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
               <div className="container text-center py-5">
                  <h1 className="display-2 text-dark mb-4 animated slideInDown DelightColor">Delight Milk Tea</h1>
                  <nav aria-label="breadcrumb animated slideInDown">
                     <ol className="breadcrumb justify-content-center mb-0">
                     </ol>
                  </nav>
               </div>
            </div>
         </div>
         {/* <!-- Page Header End --> */}


         {/* <!-- DeligthMilkTea Menu Start --> */}

         <div className="container DelightContainer">
            <motion.div className='testcls'
               animate={{ x: 10, scale: 1 }}
               initial={{ scale: 0 }}
               transition={{ duration: 1 }}
            >
               <div className="container-fluid">
                  <div className="row">
                     <motion.div
                        whileHover={{ scale: 0.9 }}
                        whileTap={{ scale: 1.1 }}
                        // drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        className="col-sm-6 col-md-4 col-lg-4">
                        <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }}>
                           <img src={RoseTea} className="card-img-top" alt="..." loading='lazy' />
                           <div className="card-body">
                              <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>rose tea</h4>
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
                        <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }} >
                           <img src={Kesarilachitea} className="card-img-top" alt="..." loading='lazy' />
                           <div className="card-body">
                              <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>kesr elaichi tea</h4>
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
                        <div className="card" style={{marginTop:'20px', backgroundColor: '#7ED957' }}>
                           <img src={Jaggerytea} className="card-img-top" alt="..." loading='lazy' />
                           <div className="card-body">
                              <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>jaggery tea</h4>
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
                           <img src={MalaiTea} className="card-img-top" alt="..." loading='lazy'/>
                           <div className="card-body">
                              <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>malai tea</h4>
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
                        <div className="card" style={{marginTop:'20px', backgroundColor: '#7ED957' }} >
                           <img src={TulsiTea} className="card-img-top" alt="..." loading='lazy' />
                           <div className="card-body">
                              <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>tulsi tea</h4>
                              <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />20/-</h4>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </motion.div>
         </div>
         {/* <!-- DeligthMilkTea Menu End --> */}
         <Footer />
      </>
   )
}

export default DeligthMilkTea;