import React,{useEffect} from 'react'
import './Testmonial.css';
import './HerbalTeaWithMilk.css';
import Aayurveditea from '../assest/Aayurvedicteaimg.png'
import Sugarfreetea from '../assest/Sugarfreeteaimg.png'
import Brownsugartea from '../assest/Brownsugarteaimg.png'
import { motion } from 'framer-motion';
import Footer from './Footer'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



function HerbalTeaWithMilk() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      {/* <!-- Page Header Start --> */}
      <div className='mainHerbalTeawithMilk'>
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container text-center py-5">
            <h1 className="display-2 text-dark mb-4 animated slideInDown HerbalWithColor">Herbal Tea With Milk</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}



      {/* withHerbalTea Menu Start */}

      <div className="container HerbalTeaWithContainer" >
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
                <div className="card" style={{marginTop:'20px', backgroundColor: '#7ED957' }}>
                  <img src={Aayurveditea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>Ayurvedic TEA</h4>
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
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }}>
                  <img src={Sugarfreetea} className="card-img-top" alt="..." loading='lazy'/>
                  <div className="card-body">
                    <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>sugar free TEA</h4>
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
                <div className="card" style={{ marginTop:'20px', backgroundColor: '#7ED957' }}>
                  <img src={Brownsugartea} className="card-img-top" alt="..." loading='lazy' />
                  <div className="card-body">
                    <h4 className="card-title" style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase' }}>brown sugar TEA</h4>
                    <h4 className="card-price" style={{ textAlign: 'center', color: 'white' }}><CurrencyRupeeIcon style={{ marginBottom: '4px' }} />25/-</h4>

                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
      {/* <!--Milk Tea Menu End--> */}
      {/* withHerbalTea Menu End */}
      <Footer />
    </>
  )
}

export default HerbalTeaWithMilk;