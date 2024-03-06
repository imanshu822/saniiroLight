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
            width: "75%",
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
            width: "25%",
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
    </>
  );
};

export default JobSection;
