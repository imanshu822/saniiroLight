// import React, { useState, useEffect } from "react";
// import { CircularProgress, Typography, Box } from "@mui/material";

// const Progressbar = ({ raised, goals }) => {
//   const raisedAmount = 46303;
//   const goalAmount = 95000;
//   const targetPercentage = Math.floor((raisedAmount / goalAmount) * 100);

//   const [animationPercentage, setAnimationPercentage] = useState(0);

//   useEffect(() => {
//     const animationTimeout = setTimeout(() => {
//       setAnimationPercentage(targetPercentage);
//     }, 1000); // Adjust the duration of the animation here (in milliseconds)

//     return () => clearTimeout(animationTimeout);
//   }, [targetPercentage]);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         display: "inline-block",
//         width: "200px",
//         height: "100px",
//       }}
//     >
//       <CircularProgress
//         variant="determinate"
//         value={animationPercentage}
//         size={100}
//         thickness={5}
//         sx={{
//             bgcolor:"red",
//           color: "#ffcd00",
//         }}
//       />
//       <Typography
//         variant="body1"
//         component="div"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         {`${animationPercentage}%`}
//       </Typography>
//     </Box>
//   );
// };

// export default Progressbar;



import React, { useState, useEffect } from "react";
import { CircularProgress, Typography, Box, Stack } from "@mui/material";

const Progressbar = ({ raised, goals }) => {
  const raisedAmount = 46303;
  const goalAmount = 95000;
  const targetPercentage = Math.floor((raisedAmount / goalAmount) * 100);

  const [animationPercentage, setAnimationPercentage] = useState(0);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationPercentage(targetPercentage);
    }, 1000); // Adjust the duration of the animation here (in milliseconds)

    return () => clearTimeout(animationTimeout);
  }, [targetPercentage]);

  return (
    <Stack
    alignItems={"center"}
      sx={{
        position: "relative",
        width: "200px",
        height: "100px",
      }}
    >
      {/* Red CircularProgress representing the unfilled portion */}
      <CircularProgress
        variant="determinate"
        value={100} // Value of 100 represents a fully unfilled circle
        size={100}
        thickness={5}
        sx={{
          color: "#686868",
          position: "absolute",
        }}
      />
      {/* Yellow CircularProgress representing the filled portion */}
      <CircularProgress
        variant="determinate"
        value={animationPercentage}
        size={100}
        thickness={5}
        sx={{
          color: "#FFC849",
          position: "absolute",
        }}
      />
      {/* Mask for the yellow CircularProgress to hide the unfilled portion */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <clipPath id="clip-path">
            <circle cx="50" cy="50" r="45" />
          </clipPath>
        </defs>
      </svg>
      {/* Displaying the percentage text */}
      <Typography
      fontWeight={"bold"}
        color={"black"}
        bgcolor={"#FFC849"}
        borderRadius={3}
        p={"0 5px"}
        variant="body1"
        component="div"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {`${animationPercentage}%`}
      </Typography>
    </Stack>
  );
};

export default Progressbar;

