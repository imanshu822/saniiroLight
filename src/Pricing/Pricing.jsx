import React from "react";
import PRicingBAnner from "./PRicingBAnner";
import PricingTab from "./PricingTab";
import Readytosign from "../Contact/parts/Readytosign";
// import PriceCardSection from "./PriceCardSection";
// import PriceTagSection from "./PracingTagSection";
// import PricingFeaturesTable from "./PricingFeaturesTable";
import Footer from "../utils/Footer";
import ContactFaq from "../Home/parts/ContactFaq";
import JoinBusinesses from "./JoinBusinesses";
const Pricing = () => {
  return (
    <>
      <PRicingBAnner />
      <PricingTab />
      <JoinBusinesses />
      <ContactFaq />
      <Readytosign />
      <Footer />
    </>
  );
};

export default Pricing;
