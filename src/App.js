import React, { Component } from 'react'
import Application from './Application'
import Navbar from './component/HomeNavbar/HomeNavbar'
import Footer from './component/HomeFooter/HomeFooter'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function App() {
  return (
    <div>
      <Navbar/>
      <Application/>
      <Footer/>
    </div>
  );
}

export default App;
