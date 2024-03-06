// import { Button as MuiButton } from "@mui/material";
// import { styled } from "@mui/system";

// const StateButton = styled(MuiButton)({
//   color: "white",
//   backgroundColor: "#F15B25",
//   paddingLeft: 5,
//   paddingRight: 5,
//   borderRadius: 0,
//   textTransform: "none",

//   "&:hover": {
//     backgroundColor: "white",
//     color: "black",
//   },
// });

// export default StateButton;



import { Button as MuiButton, Stack } from "@mui/material";
import { styled } from "@mui/system";

const StateButton = styled(MuiButton)({
  color: "black",
  backgroundColor: "white",
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 84,
  width:"220px",
  padding:"8px 60px 8px 12px",
  textTransform: "none",
fontSize:"20px",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
});

const ButtonWithImage = ({ children, iconPosition, imageUrl, ...props }) => {
  return (
    <StateButton {...props}>
      {iconPosition === "start" && imageUrl && (
        <img src={imageUrl} alt="start icon" style={{ marginRight: 19, width:"32px", height:"31px" }} />
      )}
      {children}
      {iconPosition === "end" && imageUrl && (
        <img src={imageUrl} alt="end icon" style={{ marginLeft: 8 }} />
      )}
    </StateButton>
  );
};

export default ButtonWithImage;
