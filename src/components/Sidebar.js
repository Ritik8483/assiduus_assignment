import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import dashboard from "../assets/images/dashboard.png";
import dashboardActive from "../assets/images/dashboardActive.png";
import accounts from "../assets/images/accounts.png";
import accountsActive from "../assets/images/accountsActive.png";
import dollar from "../assets/images/dollar.png";
import dollarActive from "../assets/images/dollarActive.png";
import document from "../assets/images/document.png";
import documentActive from "../assets/images/documentActive.png";
import user from "../assets/images/user.png";
import userActive from "../assets/images/userActive.png";
import contacts from "../assets/images/contacts.png";
import contactsActive from "../assets/images/contactsActive.png";

const sidebarItems = [
  {
    name: "Dashboard",
    image: dashboard,
    activeImage: dashboardActive,
  },
  {
    name: "Accounts",
    image: accounts,
    activeImage: accountsActive,
  },
  {
    name: "Payroll",
    image: dollar,
    activeImage: dollarActive,
  },
  {
    name: "Reports",
    image: document,
    activeImage: documentActive,
  },
  {
    name: "Advisor",
    image: user,
    activeImage: userActive,
  },
  {
    name: "Contacts",
    image: contacts,
    activeImage: contactsActive,
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="20px"
        marginBottom="40px"
        sx={{ cursor: "pointer" }}
      >
        <img
          height="40px"
          src="https://www.assiduusglobal.com/images/assiduus-logo-dark.webp"
          alt="assiduus_logo"
        />
      </Box>
      <Box>
        {sidebarItems.map((item, index) => {
          return (
            <Box
              key={item.name}
              display="flex"
              sx={{ cursor: "pointer" }}
              gap="10px"
              onClick={() => handleClick(index)}
              bgcolor={activeIndex === index ? "#47b747" : "#fff"}
              padding="15px 20px"
            >
              <img
                height="20px"
                style={{ paddingLeft: "20px" }}
                src={activeIndex === index ? item.activeImage : item.image}
                alt="dashboardActive"
              />
              <Typography
                fontSize="14px"
                color={activeIndex === index ? "#fff" : "#000"}
              >
                {item.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Sidebar;
