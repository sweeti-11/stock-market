import React from 'react'
import team1 from '../assest/backofc.jpg'
import './Slider.css'

const Slider = () => {
  return (
    <div>
      <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-bs-ride="carousel">
        <div className="d-flex justify-content-center mb-4">
          <button className="carousel-control-prev position-relative" type="button"
            data-bs-target="#carouselMultiItemExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next position-relative" type="button"
            data-bs-target="#carouselMultiItemExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="carousel-inner py-4">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body ">
                      <img  src={require('../assest/relince.png')} alt='card-img'  />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem'}}>
                    <div className="card-body">
                    <img  src={require('../assest/Icici.png')}  alt='card-img' />
                      <h5 className="card-title">ICICI</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>

                    </div>
                  </div>
                </div>

                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem'}}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img'  />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>

                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}   alt='card-img'/>
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>

                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}   alt='card-img'/>
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>

                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem'}}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}   alt='card-img'/>
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem'}}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="card text-center" style={{ width: '11rem' }}>
                    <div className="card-body">
                    <img  src={require('../assest/relince.png')}  alt='card-img' />
                      <h5 className="card-title">Relince Jio</h5>
                      <p className="card-text-price">500 ₹/-</p>
                      <p className="card-price incriment-decrimetn ">+6.00(1.35%)</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider