import React from "react";
import Nav from "../Navbar/Nav";
import FaqBanner from "./parts/FaqBanner";
import FeqBodyTop from "./parts/FeqBodytop";
import FeqBodyContent from "./parts/FaqBodyContent";
import Footer from "../utils/Footer";
const FaqActivities = () => {
  return (
    <>
      <Nav />
      <FaqBanner />
      <FeqBodyTop />
      <FeqBodyContent />
      <Footer />
    </>
  );
};

export default FaqActivities;
