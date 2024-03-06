import React from "react";
import Nav from "../Navbar/Nav";
import UpdatesBanner from "./parts/UpdatesBanner";
import UpdatesBodyTop from "./parts/UpdatesBodytop";
import UpdatesBodyContent from "./parts/UpdatesBodyContent";
import Footer from "../utils/Footer";
const FaqActivities = () => {
  return (
    <>
      <Nav />
      <UpdatesBanner />
      <UpdatesBodyTop />
      <UpdatesBodyContent />
      <Footer />
    </>
  );
};

export default FaqActivities;
