import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import InfoCards from './InfoCards'
import Footer from './Footer'

export class Home extends Component {
  render() {
    return (
      <div className='main'>
      <Header />
    {/* <div style={{ height: '90px' }}></div>  */}
    {/* <Navbar/> */}
    <HeroSection/>
    <InfoCards/>
    <Footer/>

      </div>
    )
  }
}

export default Home