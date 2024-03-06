import React from "react";
import Nav from "../Navbar/Nav";
import BuildingSuccess from "./parts/BuildingSuccess";
import Tagline from "./parts/Tagline";
import Billing from "../Home/parts/Billing";
import Specialize from "./parts/Specialize";
import ApplicationSection from "./parts/ApplicationSection";
import BlankSpace from "./parts/BlankSpace";
import PartnerPrivileges from "./parts/PartnerPrivileges";
import Footer from "../utils/Footer";
import ContactFaq from "../Home/parts/ContactFaq";
import Readytosign from "../Contact/parts/Readytosign";
import Inspire from "./parts/Inspire";
import Gallery from "./parts/Gallery";
const BecomeAPartner = () => {
  return (
    <>
      <Nav />;
      <BuildingSuccess />
      <Tagline />
      <Billing bgColor={true} />
      <Specialize />
      <ApplicationSection />
      <BlankSpace />
      <PartnerPrivileges />
      <Inspire />
      <Gallery />
      <ContactFaq />
      <Readytosign />
      <Footer />
    </>
  );
};

export default BecomeAPartner;
