import React from 'react'
import Footer from './Footer'

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

    <Footer/>
    </div>
  )
}

export default Service