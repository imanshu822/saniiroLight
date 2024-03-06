import * as React from "react";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

const CustomPagination = ({ blogsPerPage, totalBlogs, paginate }) => {
  const pageCount = Math.ceil(totalBlogs / blogsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    paginate(page);
    window.scrollTo({ top: 350, behavior: "smooth" }); // Scroll to the top of the page
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
