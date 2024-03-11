import React from "react";
import CaseStudyBanner from "./parts/CaseStudyBanner";
import CompanyBanner from "./parts/CompanyBanner";
import ReviewSection from "./parts/ReviewSection";
import Footer from ".././utils/Footer";
import TestimonialsCardsSection from "../Testimonials/parts/TestimonialsCardsSection";
const CaseStudy = () => {
  return (
    <>
      <CaseStudyBanner />
      <CompanyBanner />
      <TestimonialsCardsSection />

      <Footer />
    </>
  );
};

export default CaseStudy;
