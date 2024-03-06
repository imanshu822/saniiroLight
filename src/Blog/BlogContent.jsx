import React from "react";
import BlogBanner from "./parts/BlogBanner";
import Nav from "../Navbar/Nav";
import BlogFeed from "./parts/BlogFeed";
import Footer from "../utils/Footer";
import BlogContentFeed from "./parts/BlogContentFeed";
import { Box } from "@mui/material";
const BlogContent = () => {
  return (
    <>
      <Nav />
      <BlogBanner GrayBanner={true} />

      <BlogContentFeed />

      <Footer />
    </>
  );
};

export default BlogContent;
