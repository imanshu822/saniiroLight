import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import FortImage from "../../assets/image 164.png";
import TagSection from "./TagSection";
import CommentForm from "./CommentForm";
import RelatedPost from "./RelatedPost";
import { Tags, Blogs, FeaturedPosts } from "./TagsBlogsData";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const BlogFeed = () => {
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
      <Stack>
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
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "20px",
                    md: "30px",
                    lg: "40px",
                  },
                  fontWeight: 600,
                  lineHeight: "47px",
                  letterSpacing: "0em",
                  textAlign: {
                    xs: "center",
                    lg: "left",
                  },
                }}
              >
                Zoho to Exchange: Bridge calendar platforms with calendar
                interoperability
              </Typography>
              <Stack
                width={"100%"}
                direction={"column"}
                justifyContent={"center"}
                height={"40px"}
                borderTop={"1px solid rgba(0, 0, 0, 0.3)"}
                borderBottom={"1px solid rgba(0, 0, 0, 0.3)"}
                padding={"10px 20px"}
              >
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Stack width={"70%"} direction={"row"} gap={3}>
                    <Box
                      sx={{
                        paddingRight: "20px",
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        fontFamily: "Work Sans",
                        fontSize: {
                          xs: "10px",
                          lg: "16px",
                        },
                        fontWeight: 500,
                        lineHeight: "22px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      Posted On December 20, 2023
                    </Box>
                    <Stack
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: {
                          xs: "10px",
                          lg: "16px",
                        },
                        fontWeight: 500,
                        lineHeight: "22px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      By Mani Prabhu
                    </Stack>
                  </Stack>
                  <Stack
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: {
                        xs: "10px",
                        lg: "16px",
                      },
                      fontWeight: 600,
                      lineHeight: "22px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    9 Mins Read
                  </Stack>
                </Stack>
              </Stack>

              {/* content  */}

              <Stack gap={3}>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Picture this: A thriving marketing agency is buzzing with
                  activity as the team is finalizing a campaign for a major
                  client, with deadlines looming large.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  The agency uses a mix of calendar platforms: Zoho Calendar for
                  the marketing team, Exchange calendar for sales, and a custom
                  internal system for project management. While each platform
                  boasts its own strengths, communication across them is a
                  nightmare. Cracks begin to develop in their process due to
                  unforeseen circumstances.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Missed meetings:</span> John
                  in sales schedules a crucial client call on his Exchange
                  calendar, but forgets to invite Rebecca in marketing who uses
                  Zoho Calendar. She misses the call, and key campaign details
                  are lost.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>
                    Double-booked deadlines:
                  </span>{" "}
                  The design team marks a "final logo presentation" on their
                  internal calendar, unaware the same time slot is already
                  booked in Rebecca's Zoho Calendar for a client pitch. Both
                  presentations collide, creating confusion and wasted effort.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Information gaps:</span>{" "}
                  Project updates get lost in translation between platforms. The
                  sales team is unaware of a crucial design delay, leading to a
                  botched client presentation and strained relationships.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  The agency's once-streamlined operation is now plagued by
                  missed deadlines, frustrated clients, and a growing sense of
                  disarray between the teams. It’s forced to delay the launch,
                  incurring significant financial losses and reputational
                  damage.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  This scenario is not uncommon. Many enterprises face similar
                  struggles, juggling multiple calendars and wrestling with
                  numerous information silos.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  This scenario is not uncommon. Many enterprises face similar
                  struggles, juggling multiple calendars and wrestling with
                  numerous information silos.
                </Typography>
              </Stack>
              <Stack width={"100%"}>
                <Box component="img" alt="Fort Image" src={FortImage} />
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "25px",
                    fontWeight: 600,
                    lineHeight: "44px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  So, what is calendar interoperability?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  This scenario is not uncommon. Many enterprises face similar
                  struggles, juggling multiple calendars and wrestling with
                  numerous information silos.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Think of it like different languages having a universal
                  translator. In this case, the translator is the
                  interoperability feature that bridges the gap between
                  different calendar systems.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "25px",
                    fontWeight: 600,
                    lineHeight: "44px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  How does calendar interoperability work?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Here's how it generally works:
                </Typography>
                <Typography
                  flex={"column"}
                  gap={2}
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <ul>
                    <li>
                      Systems share information like availability status, event
                      details and time using standardized protocols.
                    </li>
                    <li>
                      Availability changes made in one calendar are
                      automatically reflected in others, ensuring that everyone
                      has the latest information.
                    </li>
                    <li>
                      Systems can identify overlapping events from different
                      calendars, preventing scheduling mishaps.s
                    </li>
                  </ul>
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Calendar interoperability is all about unlocking the full
                potential of your team, bridging the distance, and paving the
                way for remote success.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                With calendar interoperability in place, the agency's story
                could have a different ending. They implement a unified calendar
                solution that seamlessly integrates with their existing
                platforms. John's Exchange invite automatically pops up in
                Rebecca's Zoho Calendar, ensuring that everyone is on the same
                page. Design team deadlines are synced with Rebecca's client
                meetings, preventing last-minute clashes. Project updates flow
                freely across platforms, keeping everyone informed and on the
                same page.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "25px",
                  fontWeight: 600,
                  lineHeight: "44px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                How calendar interoperability brings together users of Zoho and
                MS Exchange
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Zoho Calendar and Microsoft Exchange users can easily interact
                and peek into each other's calendar availability status with
                calendar interoperability.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                No more endless email threads or missed calls trying to find a
                common time. Zoho Calendar users in an enterprise can now
                effortlessly check the availability status of users who have
                their calendars in Microsoft Exchange. Meetings are now easier
                to schedule, with everyone's free time visible to everyone else.
              </Typography>
              <Stack width={"100%"}>
                <Box component="img" alt="Fort Image" src={FortImage} />
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                No more endless email threads or missed calls trying to find a
                common time. Zoho Calendar users in an enterprise can now
                effortlessly check the availability status of users who have
                their calendars in Microsoft Exchange. Meetings are now easier
                to schedule, with everyone's free time visible to everyone else.
              </Typography>
              <Stack width={"100%"}>
                <Box component="img" alt="Fort Image" src={FortImage} />
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                To learn how to set up calendar interoperability between users
                of Zoho and Microsoft Exchange, refer to this help document.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "25px",
                  fontWeight: 600,
                  lineHeight: "44px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Bridging communication gaps
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                With calendar interoperability, any enterprise can transform its
                remote collaboration game. Deadlines will be met, resources will
                be optimized, and clients will be delighted. The team will feel
                empowered to work together regardless of their location or
                preferred calendar tool, rather than getting frustrated over
                fragmented systems.
              </Typography>
              <Box
                marginTop={"20px"}
                width={"100%"}
                height={"1px"}
                sx={{
                  backgroundColor: "gray",
                  marginBottom: "20px",
                }}
              />
              <CommentForm />
              <RelatedPost />
            </Stack>

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
    </Stack>
  );
};

export default BlogFeed;
