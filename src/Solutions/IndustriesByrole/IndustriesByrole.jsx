import React from "react";
import Nav from "../../Navbar/Nav";
import Industry1 from "./parts/Industry1";
import Industry2 from "./parts/Industry2";
import Industry3 from "./parts/Industry3";
import Industry4 from "./parts/Industry4";
import Industry5 from "./parts/Industry5";
import Industry6 from "./parts/Industry6";
import { Stack } from "@mui/material";
import Signupfree from "../../Solutions/Signupfree";
import Footer from "../../utils/Footer";

const IndustriesByrole = () => {
  return (
    <>
      <Nav />

      <Stack
        gap={{
          xs: "20px",
          md: "40px",
          lg: "60px",
        }}
      >
        <Industry1 />
        <Industry2 />
        <Industry3 />
        <Industry4 />
        <Industry5 />
        <Industry6 />
        <Signupfree />
      </Stack>
      <Footer />
    </>
  );
};

export default IndustriesByrole;
