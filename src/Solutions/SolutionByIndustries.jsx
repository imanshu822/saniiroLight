import { Stack } from '@mui/material'
import React from 'react'
import Nav from '../Navbar/Nav'
import Industries1 from './industriesParts/Industries1'
import Industries2 from './industriesParts/Industries2'
import Industries3 from './industriesParts/Industries3'
import Industries4 from './industriesParts/Industries4'
import Clock from '../Home/parts/Clock'
import ContactFaq from '../Home/parts/ContactFaq'
import Footer from '../utils/Footer'
import ProductSlider from '../About/parts/ProductSlider'

const SolutionByIndustries = () => {
  return (
    <>
      <Stack position={"relative"}>
        <Nav />
        <Industries1 />
        <Industries2 />
      </Stack>
      <Industries3 />
      <Industries4 />
      <Stack bgcolor={"#f1f1f1"} pt={5}>
        <ProductSlider />
        <Clock />
        <ContactFaq />
        <Footer />
      </Stack>
    </>
  );
}

export default SolutionByIndustries