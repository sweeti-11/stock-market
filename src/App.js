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
import MilkTea from './Components/MilkTea';
import DeligthMilkTea from './Components/DeligthMilkTea';
import HerbalTeaWithMilk from './Components/HerbalTeaWithMilk';
import HerbalTeaWithoutMilk from './Components/HerbalTeaWithoutMilk';
import HotCoffee from './Components/HotCoffee';
import ColdCoffee from './Components/ColdCoffee';
import Gallery from './Components/Gallery';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
{/* <Router> */}
<Navbar />
     <Routes>
        <Route path='/' element={<Sections/>}/>
        {/* <Route path='/gallary' element={<Section/>}/> */}
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/delightmilktea' element={<DeligthMilkTea/>} />
        <Route path='/milktea' element={<MilkTea/>} />
        <Route path='/HerbalTeawithmilk' element={< HerbalTeaWithMilk/>} />
        <Route path='/HerbalTeawithoutmilk' element={<HerbalTeaWithoutMilk/>}/>
        <Route path='/hotcoffee' element={<HotCoffee/>} />
        <Route path='/coldcoffee' element={<ColdCoffee/>}/>
        <Route path='/gallary' element={<Gallery/>} />
      </Routes> 
{/* </Router> */}

    </>
  );
}

export default App;
