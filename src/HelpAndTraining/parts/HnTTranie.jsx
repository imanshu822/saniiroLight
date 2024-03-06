import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import TrannieCard from "./TrannieCard";
import trannieImg from "../../assets/Rectangle 4379.png";
import CustomPagination from "./Pagination";

const Trainers = [
  {
    id: 1,
    name: "1. Chitharth S",
    title: "Team Lead - Customer Support",
    img: trannieImg,
  },
  {
    id: 2,
    name: "2. Chitharth S",
    title: "Team Lead - Customer Support",
    img: trannieImg,
  },
  {
    id: 3,
    name: "3. Chitharth S",
    title: "Team Lead - Customer Support",
    img: trannieImg,
  },
  {
    id: 4,
    name: "4. Chitharth S",
    title: "Team Lead - Customer Support",
    img: trannieImg,
  },
  {
    id: 5,
    name: "5. Chitharth S",
    title: "Team Lead - Customer Support",
    img: trannieImg,
  },
  {
    id: 6,
    name: "6. Chitharth S",
    title: "Team Lead - Customer Support",
    img: trannieImg,
  },
  {
    id: 7,
    name: "7. Chitharth S",
    title: "Team Lead - Customer Support",
    img: trannieImg,
  },
];
const HnTTranie = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const trainersPerPage = 3;
  const indexOfLastTrainer = currentPage * trainersPerPage;
  const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
  const currentTrainers = Trainers.slice(
    indexOfFirstTrainer,
    indexOfLastTrainer
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Stack width={"1015px"} height={"600px"} margin={"70px auto 5px"}>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: "40px",
          fontWeight: 600,
          lineHeight: "43px",
          letterSpacing: "0em",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Meet your trainers
      </Typography>
      <Stack
        direction={"row"}
        gap={2}
        margin={"20px 0"}
        sx={{
          transition: "left 0.5s ease",
          left: `-${(currentPage - 1) * 323}px`,
          position: "relative",
        }}
      >
        {currentTrainers.map((trainer) => (
          <TrannieCard
            key={trainer.id}
            trainer={trainer}
            currentPage={currentPage}
          />
        ))}
      </Stack>
      <CustomPagination
        trainersPerPage={trainersPerPage}
        totalTrainers={Trainers.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Stack>
  );
};

export default HnTTranie;
