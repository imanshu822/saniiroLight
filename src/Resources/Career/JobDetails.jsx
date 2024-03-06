import React from "react";
import Nav from "../../Navbar/Nav";
import JobDiscrption from "./parts/JobDiscrption";
import Footer from "../../utils/Footer";
import Readytosign from "../../Contact/parts/Readytosign";

const JobDetails = () => {
  return (
    <>
      <Nav />
      <JobDiscrption />
      <Readytosign />
      <Footer />
    </>
  );
};

export default JobDetails;
