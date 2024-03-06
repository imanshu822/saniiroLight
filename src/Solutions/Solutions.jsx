import React from 'react'
import SolutionsBanner from './parts/SolutionsBanner'
import Nav from '../Navbar/Nav'
import SolutionSection2 from './parts/SolutionSection2'
import SolutionSection3 from './parts/SolutionSection3'
import Footer from '../utils/Footer'
import ReadytoBuild from './parts/ReadytoBuild'

const Solutions = () => {
  return (
    <>
    <Nav/>
    <SolutionsBanner/>
    <SolutionSection2/>
    <SolutionSection3/>
    <ReadytoBuild/>
    <Footer/>
    </>
  )
}

export default Solutions