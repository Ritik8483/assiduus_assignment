import { Box, Typography } from "@mui/material";
import React from "react";
import { hrStyle } from "./CheckingAccount";

const account = [
  "Sales",
  "Advertising",
  "Inventory",
  "Entertainment",
  "Product",
];
const thisMonth = ["1,194.58", "6,879.02", "4,692.26", "0.00", "4,652.10"];
const ytd = ["11,418.29", "9,271.36", "9,768.09", "0.00", "2,529.90"];

const AccountWatchList = () => {
  return (
    <Box>
      <Box
        padding="15px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="14px" fontWeight="700">
          Account watchlist
        </Typography>
      </Box>
      <hr style={hrStyle} />
      <Box
        padding="15px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography color="#bec1c3" fontSize="12px" fontWeight="500">
            Account
          </Typography>
          <Box
            marginTop="25px"
            display="flex"
            flexDirection="column"
            gap="15px"
          >
            {account.map((item) => (
              <Typography fontSize="14px" fontWeight="600" key={item}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="70px">
          <Box>
            <Typography color="#bec1c3" fontSize="12px" fontWeight="500">
              This Month
            </Typography>
            <Box
              marginTop="25px"
              display="flex"
              flexDirection="column"
              gap="15px"
            >
              {thisMonth.map((item) => (
                <Typography fontSize="14px" fontWeight="600" key={item}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography color="#bec1c3" fontSize="12px" fontWeight="500">
              YTD
            </Typography>
            <Box
              marginTop="25px"
              display="flex"
              flexDirection="column"
              gap="15px"
            >
              {ytd.map((item) => (
                <Typography fontSize="14px" fontWeight="600" key={item}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountWatchList;
