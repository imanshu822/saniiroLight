import * as React from "react";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

const CustomPagination = ({
  trainersPerPage,
  totalTrainers,
  paginate,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalTrainers / trainersPerPage);

  const handlePageChange = (event, page) => {
    paginate(page);
    // Scroll to the top of the page
  };

  return (
    <Stack
      margin={"auto"}
      sx={{ justifyContent: "center", alignItems: "center", pt: 6, pb: 6 }}
    >
      <MuiPagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            component="a"
            sx={{
              "&.Mui-selected": {
                textDecoration: "underline",
                color: "blue",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default CustomPagination;
