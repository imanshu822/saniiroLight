import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import BlogCard from "./BlogCard";
import TagSection from "./TagSection";
import CustomPagination from "./Pagination";
import { Tags, Blogs, FeaturedPosts } from "./TagsBlogsData";
import { Link } from "react-router-dom";

const BlogFeed = () => {
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const [activeTags, setActiveTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(10);

  const blogMatchesTags = (blog) => {
    return (
      activeTags.every((tag) => blog.region.includes(tag)) ||
      activeTags.every((tag) => blog.sector.includes(tag)) ||
      activeTags.every((tag) => blog.size.includes(tag)) ||
      activeTags.every((tag) => blog.others.includes(tag))
    );
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = Blogs.filter(blogMatchesTags).slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSetActiveTags = (tags) => {
    setActiveTags(tags);
    setCurrentPage(1);
  };

  return (
    <Stack backgroundColor={"#F6F8FF"} minHeight={"1100px"}>
      <Stack position="relative" width={"1200px"} margin="auto">
        <Stack
          direction="column"
          gap={2}
          sx={{
            marginTop: "0px",
            paddingTop: "30px",
          }}
        >
          <Stack width="790px" direction="row" flexWrap="wrap" gap={2}>
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/Resources/Blog/${blog.id}`}
                  key={blog.id}
                  onClick={handleClick} // Attach onClick event to trigger window scroll
                >
                  <BlogCard key={blog.id} blog={blog} />
                </Link>
              ))
            ) : (
              <Typography
                key="not-found-message"
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "50px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#4DB267",
                  width: "100%",
                }}
              >
                Not matching with given tags
              </Typography>
            )}
            <CustomPagination
              blogsPerPage={blogsPerPage}
              totalBlogs={Blogs.length}
              paginate={paginate}
            />
          </Stack>
          <Stack
            sx={{
              position: "absolute",
              width: "330px",
              top: "30px",
              right: "30px",
            }}
          >
            <Stack>
              <TextField
                sx={{
                  width: "330px",
                  height: "50px",
                }}
                id="outlined-basic"
                label="Search Job"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{
                          color: "gray",
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Box marginTop="30px" border="0.5px solid rgba(0, 0, 0, 0.3)" />
            <Stack width="324px" height="210px">
              <Box marginTop="25px">
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  FEATURED POSTS
                </Typography>
              </Box>
              <Stack>
                {FeaturedPosts.slice(0, 4).map((post, index) => (
                  <Stack key={index} gap={1} marginTop="27px">
                    <Stack direction="row" gap={1}>
                      <DescriptionIcon />
                      <Typography
                        key={index}
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "24px",
                          letterSpacing: "-0.02em",
                          textAlign: "left",
                        }}
                      >
                        {post.title}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Box marginTop="70px" border="0.5px solid rgba(0, 0, 0, 0.3)" />
            <Stack>
              <Box marginTop="25px">
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  TAGS
                </Typography>
              </Box>
            </Stack>
            <TagSection
              activeTags={activeTags}
              setActiveTags={handleSetActiveTags}
              tags={Tags}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogFeed;
