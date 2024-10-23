import {
  Avatar,
  Box,
  Divider,
  Typography,
  TextField,
  InputAdornment,
  Badge,
} from "@mui/material";
import React, { useState } from "react";
import "../../styles/header.css";
import Logo from "../../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Profile from "../../assets/Profile.jpg";

export default function Header() {

  const [notification, setNotification] = useState(false);
  const [showprofile, setShowProfile] = useState(false);

  const handleNotification = () => {
    setNotification(!notification);
  }

  const handleProfile = () => {
    setShowProfile(!showprofile)
  }

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
        <Box className="header-profile"  onMouseEnter={handleProfile} >
          <Box className={`header-notification-con ${notification ? "clicked" : ""}`} onClick={handleNotification}>
        <Badge
      badgeContent=""
      color="primary" 
      overlap="circular"
      variant="dot" 
      sx={{
        '& .MuiBadge-dot': {
          backgroundColor: "5078E1",
          width: "30%",
          height: "35%",
          marginRight: "15%",
          border: "1px solid #1C1C1C",
        },
      }}
      className="header-badge"
    >
      <GoBell className={`header-notification ${notification ? "clicked" : ""}`}  /> {/* Adjust icon color and size */}
    </Badge>
    </Box>
    <Box className="header-profile-contents">
          <Divider orientation="vertical" flexItem className="header-hr"/>
          <Box className="header-profilepic-container" >
            <img src={Profile} className="header-profilepic" />
          </Box>
          <Box className="header-details">
            <Typography sx={{fontSize: "13px",fontWeight: "550"}}>Bala Ganesh</Typography>
            <Typography sx={{color: "#98A0AC",fontSize: "11px"}}>Super Admin</Typography>
          </Box>
          { showprofile ? <FaAngleUp /> : <FaAngleDown />}
          
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
