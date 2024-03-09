import React from "react";
import Nav from "../../Navbar/Nav";
import CareerBanner from "./parts/CareerBanner";
import JobSection from "./parts/JobSection";
import Readytosign from "../../Contact/parts/Readytosign";
import Footer from "../../utils/Footer";
function Career() {
  return (
    <>
      <Nav />
      <CareerBanner />
      <JobSection />
      <Readytosign />
      <Footer />
    </>
  );
}

export default Career;
