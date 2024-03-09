import React, { useState } from "react";
import JobCard from "./JobCard";
import { Box, Stack } from "@mui/material";
import SocialMediaCard from "./SocialMediaCard";
import CustomPagination from "./Pagination";
import Jobs from "./JobsArray";
const JobSection = () => {
  const jobsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = Jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Stack
        display={{
          xs: "none",
          lg: "flex",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          sx={{ margin: "100px 100px 50px 100px" }}
          gap={"21px"}
        >
          <Stack
            display="flex"
            flexDirection="row"
            sx={{
              width: "73%",
              margin: "auto",
            }}
          >
            <Stack direction={"column"} gap={3}>
              {currentJobs.map((job, index) => (
                <JobCard
                  key={index}
                  title={job.Title}
                  description={job.Description}
                  opening={job.Opening}
                  location={job.Location}
                  department={job.Department}
                />
              ))}
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: "29%",
            }}
          >
            <SocialMediaCard />
          </Stack>
        </Box>
        <CustomPagination
          jobsPerPage={jobsPerPage}
          totalJobs={Jobs.length}
          paginate={paginate}
        />
      </Stack>

      <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
      >
        <Box
          flexDirection="row"
          margin={"0 auto"}
          gap={"21px"}
          width={{
            xs: "100%",
            lg: "95%",
          }}
        >
          <Stack
            flexDirection="row"
            sx={{
              width: {
                xs: "95%",
                lg: "75%",
                xl: "75%",
              },
              margin: "0 auto",
            }}
          >
            <Stack direction={"column"} gap={3}>
              {currentJobs.map((job, index) => (
                <JobCard
                  key={index}
                  title={job.Title}
                  description={job.Description}
                  opening={job.Opening}
                  location={job.Location}
                  department={job.Department}
                />
              ))}
            </Stack>
          </Stack>
          <Stack
            display={{
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            }}
            sx={{
              width: "25%",
            }}
          ></Stack>
        </Box>
        <CustomPagination
          jobsPerPage={jobsPerPage}
          totalJobs={Jobs.length}
          paginate={paginate}
        />
        <Stack
          display={{
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          }}
          margin={"0 auto"}
          mb={2}
          width={"95%"}
        >
          <SocialMediaCard />
        </Stack>
      </Stack>
    </>
  );
};

export default JobSection;
