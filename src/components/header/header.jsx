import {
  Avatar,
  Box,
  Divider,
  Typography,
  TextField,
  InputAdornment,
  Badge,
} from "@mui/material";
import React from "react";
import "../../styles/header.css";
import Logo from "../../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import Profile from "../../assets/Profile.jpg";

export default function Header() {
  return (
    <Box className="header-contents">
      <Box className="header-bars">
        <Box className="header-logo-title">
          <img src={Logo} className="header-img" />
          <Divider orientation="vertical" flexItem className="header-hr" />
          <div className="header-title" sx={{ fontSize: "12px" ,fontWeight: "550"}}>
            PROPERTY MANAGEMENT SOLUTION
          </div>
        </Box>
        <Box className="header-search-container">
          <input className="header-searchbar" placeholder="Search"></input>
          <IoIosSearch className="search-icon" />
        </Box>
        <Box className="header-profile">
        <Badge
      badgeContent=""
      color="primary" // Change to your desired color (primary, secondary, etc.)
      overlap="circular"
      variant="dot" // Use dot variant for a circular badge
      sx={{
        '& .MuiBadge-dot': {
          backgroundColor: "5078E1",
          width: "5px",
          height: "8px",
          marginRight: "10%",
          border: "1px solid #1C1C1C",
        },
      }}
      className="header-badge"
    >
      <GoBell className="header-notification" style={{ fontSize: '24px', color: 'white' }} /> {/* Adjust icon color and size */}
    </Badge>
    <Box className="header-profile-contents">
          <Divider orientation="vertical" flexItem className="header-hr"/>
          <Box className="header-profilepic-container" >
            <img src={Profile} className="header-profilepic" />
          </Box>
          <Box className="header-details">
            <Typography sx={{fontSize: "13px",fontWeight: "550"}}>Bala Ganesh</Typography>
            <Typography sx={{color: "#98A0AC",fontSize: "11px"}}>Super Admin</Typography>
          </Box>
          <FaAngleDown />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
