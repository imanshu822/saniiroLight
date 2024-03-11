import { Box, Stack } from '@mui/material'
import React from 'react'
import ContactUs from './parts/ContactUs'
import GrennSection from './parts/GreenSection'
import Bluescreen from './parts/Bluescreen'
import Offices from './parts/Offices'
import Footer from '../utils/Footer'
import Readytosign from './parts/Readytosign'

const Contact = () => {
  return (
    <Box fontFamily={"Work Sans"} maxWidth={"1536px"} margin={"0 auto"} gap={4}>
      <ContactUs />
      <Stack bgcolor={"#F1F1F1"}>
        <GrennSection />
        <Bluescreen />
      </Stack>
      <Offices />
      <Readytosign />
      <Footer />
    </Box>
  );
}

export default Contact