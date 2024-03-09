import { Stack } from "@mui/material";
import React from "react";
import Industries from "./IndustriesByusecases/Industries";
import Industry2 from "./IndustriesByusecases/Industry2";
import Footer from "../utils/Footer";
import Signupfree from "./Signupfree";

const SolutionByusecases = () => {
  return (
    <Stack>
      <Industries />
      <Industry2 />
      <Signupfree />
      <Footer />
    </Stack>
  );
};

export default SolutionByusecases;
