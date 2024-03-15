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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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

  const [filterClicked, setFilterClicked] = useState(false);
  const handleFilterClick = () => {
    setFilterClicked(!filterClicked);
  };

  return (
    <Stack
      backgroundColor={"#F6F8FF"}
      minHeight={{
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
      }}
      m={"0 auto"}
    >
      <Stack
        alignSelf={"center"}
        position="relative"
        width={{
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "1200px",
        }}
      >
        <Stack
          width={"100%"}
          direction="column"
          gap={2}
          sx={{
            marginTop: "0px",
            paddingTop: "30px",
          }}
          m={"0 auto"}
          justifyContent={{
            xs: "center",
          }}
        >
          <Stack
            display={{
              xs: "flex",
              lg: "none",
            }}
            m={"0 auto"}
            width={"95%"}
          >
            <Stack width={"100%"}>
              <TextField
                sx={{
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

            <Stack
              borderRadius={"5px"}
              pb={2}
              mt={2}
              style={
                filterClicked
                  ? {
                      border: "1px solid lightgray",
                      backgroundColor: "#dbe1f9",
                    }
                  : {}
              }
            >
              <Stack
                onClick={handleFilterClick}
                border={"1px solid lightgray"}
                borderRadius={"5px"}
                p={2}
                minWidth={"50%"}
                direction={"row"}
                justifyContent={"space-between"}
                backgroundColor={"#F6F8FF"}
              >
                {" "}
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  width={"100%"}
                  color={"#4DB267"}
                >
                  Filter Blogs{" "}
                </Typography>
                <ArrowDropDownIcon />
              </Stack>
              {filterClicked && (
                <Stack width={"90%"} m={"0 auto"}>
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
                        width={"100%"}
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
              )}
            </Stack>
          </Stack>
          <Stack
            width={{
              xs: "95%",
            }}
            m={"0 auto"}
            direction="row"
            flexWrap="wrap"
            gap={2}
            justifyContent={{
              xs: "center",
              lg: "left",
            }}
          >
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
          </Stack>
          <CustomPagination
            blogsPerPage={blogsPerPage}
            totalBlogs={Blogs.length}
            paginate={paginate}
          />
          <Stack
            m={"0 auto"}
            width={"95%"}
            display={{
              xs: "flex",
              lg: "none",
            }}
          >
            <Box marginTop="30px" border="0.5px solid rgba(0, 0, 0, 0.3)" />
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
            <Box marginTop="30px" border="0.5px solid rgba(0, 0, 0, 0.3)" />
          </Stack>
          <Stack
            display={{
              xs: "none",
              lg: "flex",
            }}
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
