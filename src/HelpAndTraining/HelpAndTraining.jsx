import React from "react";
import Nav from "../Navbar/Nav";
import HnTHeader from "./parts/HnTHeader";
import HnTVirtal from "./parts/HnTVirtal";
import HnTBanner from "./parts/HnTBanner";
import HnTTranie from "./parts/HnTTranie";
import ContactFaq from "../Home/parts/ContactFaq";
import Footer from "../utils/Footer";
import Quote from "./parts/Quote";
const HelpAndTraining = () => {
  return (
    <>
      <Nav />
      <HnTHeader />
      <HnTVirtal />
      <HnTBanner />
      <HnTTranie />
      <Quote />
      <ContactFaq />
      <Footer />
    </>
  );
};

export default HelpAndTraining;
