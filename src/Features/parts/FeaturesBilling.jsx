import React from "react";
import Nav from "../../Navbar/Nav";
import BillingBanner from "./parts/BillingBanner";
import BillingFeatures from "./parts/BillingFeatures";
import FeaturesGlance from "./parts/FeaturesGlance";
import BillingSteps from "./parts/BillingSteps";
import BestFinchers from "./parts/BestFichers";
import CustomerFeedback from "./parts/CustomerFeedback";
import Clock from "../../Home/parts/Clock";
import ImprovedSales from "./parts/ImprovedSales";
import Footer from "../../utils/Footer";
import ProductSlider from "../../About/parts/ProductSlider";
import { Stack } from "@mui/material";
const FeaturesBilling = () => {
  return (
    <>
      <BillingBanner />
      <BillingFeatures />
      <FeaturesGlance />
      <BillingSteps />
      <BestFinchers />
      <Stack
        display={{
          xs: "none",
          lg: "flex",
        }}
      >
        <CustomerFeedback />
      </Stack>
      <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
      >
        <ProductSlider />
      </Stack>
      <Clock />
      <ImprovedSales />

      <Footer />
    </>
  );
};

export default FeaturesBilling;
