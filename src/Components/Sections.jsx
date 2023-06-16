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
import Home_sec1 from './Home_sec1'

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
    <Client/>
    <Contact/>
    <Home_sec1/>
    <Footer />
   </>
  )
}

export default Sections