import * as React from "react";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

const CustomPagination = ({ jobsPerPage, totalJobs, paginate }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    paginate(page); // Call the paginate function passed from the JobSection component
    window.scrollTo({ top: 700, behavior: "smooth" });
  };

  return (
    <Stack
      sx={{
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
        mb: 6,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          color: "white",
        }}
      >
        <MuiPagination
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
            },
          }}
          count={Math.ceil(totalJobs / jobsPerPage)} // Calculate the number of pages
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              component="a"
              sx={{
                "&.Mui-selected": {
                  textDecoration: "underline",
                  color: "#F15B25",
                  "&:hover": {
                    textDecoration: "underline",
                    backgroundColor: "white",
                    color: "#F15B25",
                  },
                },
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </Stack>
  );
};

export default CustomPagination;
