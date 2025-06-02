import React, { useContext } from 'react'
import './Home.css'
import { Nav } from '../../Components/Nav/Nav'
import Dashboard from '../../Components/Dashboard/Dashboard'
import { userContext } from '../../Context/Context'
import Footer from '../../Components/Footer/Footer'
import ContactSection from '../../Components/ContactSection/ContactSection'


const Home = () => {

  const {mode}=useContext(userContext);
  return (
   <>
   
   <div className={mode=="light"?"main_body ":"dark_mode "}>
   <Nav/>
   <Dashboard/>
   <ContactSection/>
   <Footer/>
   
   </div>
   </>
  )
}

export default Home