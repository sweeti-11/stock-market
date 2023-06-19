import React from 'react';
import  { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sections from './Components/Sections';
// import Section from './Components/Section';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Feature from './Components/Feature';
import Client from './Components/Client';
import Platform from './Components/Platform';
import Service from './Components/Service';

function App() {

  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

<Navbar />
     <Routes>
        <Route path='/' element={<Sections/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/feature' element={<Feature/>} />
        <Route path='/client' element={<Client/>}/>
        <Route path='/platform' element={<Platform/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes> 

    </>
  );
}

export default App;
