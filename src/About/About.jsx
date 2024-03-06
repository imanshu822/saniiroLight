import React from "react";
import AboutBanner from "./parts/AboutBanner";
import Nav from "../Navbar/Nav";
import WelcomeToSaniiro from "./parts/WelcomeToSaniiro";
import ExploreAbout from "./parts/ExploreAbout";
import Clock from "../Home/parts/Clock";
import Awards from "../Home/parts/Awards";
import Footer from "../utils/Footer";
import OurJourney from "./parts/OurJourney";
import OurNetwork from "./parts/OurNetwork";
import ProductSlider from "./parts/ProductSlider";
import Name from "./parts/Name";
import { Stack } from "@mui/material";
const About = () => {
  return (
    <>
      <Nav />
      <Stack
        sx={{
          gap: 5,
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <AboutBanner />
        <WelcomeToSaniiro />
        <ExploreAbout />
        <OurJourney />
        <OurNetwork />
        <ProductSlider />
        <Name />
        <Clock />
        <Awards />
        <Footer />
      </Stack>
    </>
  );
};

export default About;
