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
import Feature from './Feature'

function Sections() {
  return (
   <> 
    <Carousel/>
    <Feature/>
    <About />
    <Product />
    <Artical />
    <Video />
    <Store />
    <Testmonial />
    <Client/>
    <Contact/>
   
    <Footer />
   </>
  )
}

export default Sections