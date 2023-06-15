import React from 'react'
import Carousel from './Carousel'
import About from './About'
import Product from './Product'
import Artical from './Artical'
import Video from './Video'
import Store from './Store'
import Testmonial from './Testmonial'
import Footer from './Footer'
import Contact from './Contact'

function Sections() {
  return (
   <> 
    <Carousel/>
    <About />
    <Product />
    <Artical />
    <Video />
    <Store />
    <Testmonial />
    <Contact/>
    <Footer />
   </>
  )
}

export default Sections