// import { useState } from "react";
import './App.css'
import Header from './componets/header.jsx'
import Hero from './componets/hero.jsx'
import About from './componets/about.jsx'
import Service from './componets/service.jsx'
import Counter from './componets/counter'
import Portofolio from './componets/portofolio'
import Testimonial from './componets/testimonial'
import Blog from './componets/blog'
import Contact from './componets/contact'
import Footer from './componets/footer'



function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Counter/>
      <Portofolio/>
      <Testimonial/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default App
