import React from 'react'
import Footer from './Componets/footer/Footer'
import Contact from './Componets/contact/Contact'
import About from './Componets/about/About'
import Projects from './Componets/projects/Projects'
import Slide from './Componets/slide/Slide'
import Topbar from './Componets/navbar/Topbar'

const App = () => {
  return (
    <div>
      <Topbar/>
      <Slide/>
      <Projects/>    
      <About/>    


      
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App