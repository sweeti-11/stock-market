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
import Client from './Client'

function Sections() {
  return (
   <> 
    <Carousel/>
    <Client/>
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