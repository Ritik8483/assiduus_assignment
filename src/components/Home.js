import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CheckingAccount from "./CheckingAccount";
import InvoicesOwned from "./InvoicesOwned";
import TotalCash from "./TotalCash";
import AccountWatchList from "./AccountWatchList";

const boxStyle = {
  height: "320px",
  width: "100%",
  borderRadius: "7px",
  backgroundColor: "#fff",
  overflowX: "auto",
};

const Home = () => {
  const [months, setMonths] = useState("");
  const [manage, setManage] = useState("");
  return (
    <Box minHeight="100vh" display="flex">
      <Box width="15%">
        <Sidebar />
      </Box>
      <Box width="85%">
        <Header />
        <Box padding="30px" height="calc(100% - 90px)" bgcolor="#f6f7f9">
          <Box
            marginBottom="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="20px"
          >
            <Box sx={boxStyle}>
              <CheckingAccount
                manage={manage}
                setManage={setManage}
                setMonths={setMonths}
                months={months}
              />
            </Box>
            <Box sx={boxStyle}>
              <InvoicesOwned />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="20px"
          >
            <Box sx={boxStyle}>
              <TotalCash />
            </Box>
            <Box sx={boxStyle}>
              <AccountWatchList />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
