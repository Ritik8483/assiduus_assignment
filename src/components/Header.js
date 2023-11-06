import React from "react";
import Box from "@mui/material/Box";
import searchImage from "../assets/images/search.svg";
import bell from "../assets/images/bell.png";
import arrowDown from "../assets/images/arrowDown.png";
import girl from "../assets/images/girl.jpeg";

const inputStyle = {
  height: "40px",
  width: "180px",
  backgroundColor: "#f6f7f9",
  borderRadius: "8px",
  outline: "0",
  border: "none",
  padding: "0 10px 0 33px",
};

const notificationDot = {
  height: "7px",
  width: "7px",
  borderRadius: "50%",
  backgroundColor: "red",
  position: "absolute",
  border: "2px solid white",
  zIndex: "1",
  top: "0px",
  left: "13px",
};

const imageStyle = { marginRight: "-30px", zIndex: "1" };

const Header = () => {
  return (
    <Box
      height="90px"
      gap="30px"
      paddingRight="40px"
      display="flex"
      justifyContent="end"
      alignItems="center"
    >
      <Box display="flex" alignItems="center">
        <img
          height="25px"
          width="25px"
          style={imageStyle}
          src={searchImage}
          alt="searchImage"
        />
        <input type="text" style={inputStyle} />
      </Box>
      <Box position="relative" sx={{ cursor: "pointer" }}>
        <img height="25px" width="25px" src={bell} alt="bell" />
        <Box sx={notificationDot}></Box>
      </Box>
      <Box
        height="30px"
        width="30px"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ cursor: "pointer" }}
        overflow="hidden"
      >
        <img
          height="30px"
          width="30px"
          style={{ objectFit: "cover" }}
          src={girl}
          alt="userImage"
        />
      </Box>
      <img
        style={{ cursor: "pointer" }}
        height="25px"
        width="25px"
        src={arrowDown}
        alt="arrowDown"
      />
    </Box>
  );
};

export default Header;
