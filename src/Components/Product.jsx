import React from 'react'
// import product1 from "../assest/prod2.jpg"
// import product2 from "../assest/prod3.jpg"
// import product3 from "../assest/prod2.jpg"
// import product4 from "../assest/prod4.jpg"
import MilkTea from '../assest/MilkTeaspecial.png'
import Delightmilktea from '../assest/Delightmilktea.png'
import HerbalWithmilk from '../assest/HerbalWithmilk.png'
import Herbalwithoutmilk from '../assest/HerbalTeawithoutMilks.png'
import HotCoffee from '../assest/HotCoffies.png'
import ColdCoffee from '../assest/ColdCoffies .png'


import './Prod.css'


function Product() { 

  
    return (

        <>
      
            <section className="pt-5 pb-5 desktop-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className='text-centre'>Our Special tea Categories </h2>
                        </div>

                        <div className="col-12">
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4 mb-3" >
                                                <div className="card Cardsize" style={{backgroundColor:'palegreen', minHeight:'330px'}}> 
                                                    <img className="img-fluid" alt="100%x280" src={MilkTea} loading='lazy' />                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Milk Tea Special</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={Delightmilktea} loading='lazy'/>                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Delight Milk Tea Special</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={HerbalWithmilk} loading='lazy' />                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Herbal Tea With Milk</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={Herbalwithoutmilk} loading='lazy' />                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Herbal Tea Without Milk</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={HotCoffee} loading='lazy'/>                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Hot Coffee</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={ColdCoffee} loading='lazy'/>                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Cold Coffee</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden"></span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 pb-5 mobile-section" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className='text-centre'>Our Special tea Categories </h2>
                        </div>



                        <div className="col-lg-12">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-indicators">
                                

                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="row">
                                        <div className="carousel-item active">
                                            <div className="col-md-12 mb-3" >
                                                <div className="card Cardsize" style={{backgroundColor:'palegreen', minHeight:'330px'}}> 
                                                    <img className="img-fluid" alt="100%x280" src={MilkTea} loading='lazy' />                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Milk Tea Special</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item ">
                                            <div className="col-md-12 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={Delightmilktea} loading='lazy'/>                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Delight Milk Tea Special</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item ">
                                            <div className="col-md-12 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={HerbalWithmilk} loading='lazy' />                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Herbal Tea With Milk</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-12 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={Herbalwithoutmilk} loading='lazy' />                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Herbal Tea Without Milk</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-12 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={HotCoffee} loading='lazy'/>                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Hot Coffee</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-12 mb-3">
                                                <div className="card" style={{backgroundColor:'palegreen',minHeight:'330px'}}>
                                                    <img className="img-fluid" alt="100%x280" src={ColdCoffee} loading='lazy'/>                                        
                                                    <div className="card-body">
                                                        <h4 className="card-title">Cold Coffee</h4>
                                                    </div>
                                                </div>
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                            




                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden"></span>
                                </button>
                            </div>
                        </div>



                    </div>
                </div>
            </section>









        </>
    )
}

export default Product
