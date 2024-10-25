import React, { useContext, useState } from "react";
import {
  Box,
  Badge,
  Typography,
  Divider,
  FormControlLabel,
  Switch,
} from "@mui/material";
import "../../styles/header.css";
import Logo from "../../assets/Logo.png";
import Profile from "../../assets/Profile.jpg";
import { styled } from "@mui/material/styles";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { TotalContext } from "../usecontext/usecontext";

export default function Header() {
  const { toggleTheme, theme } = useContext(TotalContext);
  const [notification, setNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleNotification = () => {
    setNotification(!notification);
  };

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleMode = () => {
    toggleTheme();
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 45,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#65C466",
        border: "3px solid white",
        margin: "0% 0% 0% 5%",
        "& .MuiSwitch-thumb": {
          backgroundColor: "#5AC782",
        },
        "& + .MuiSwitch-track": {
          backgroundColor: "#EEF9EE",
          opacity: 1,
          border: 0,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
      backgroundColor: "#98A0AC",
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E4E8EE",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const handleEnter = (event) => {
    if(event.key==='Enter'){
      console.log("Enter Pressed")
      handleMode();
    }
  }

  return (
    <Box className="header-contents">
      <Box className="header-bars">
        <Box className="header-logo-title">
          <img src={Logo} className="header-img" alt="Logo" />
          <Divider orientation="vertical" flexItem className="header-hr" />
          <div className="header-title">PROPERTY MANAGEMENT SOLUTION</div>
        </Box>

        <Box className="header-search-container">
          <input className="header-searchbar" placeholder="Search" />
          <IoIosSearch className="search-icon" />
        </Box>
        <Box sx={{ width: "200px", gap: "2rem", display: "flex" }}>
          <span>{theme ? "Dark Mode" : "Light Mode"}</span>
          <FormControlLabel
            control={<IOSSwitch checked={theme} onChange={handleMode} onKeyDown={handleEnter} tabIndex={0}/>}
          />
        </Box>

        <Box className="header-profile" onMouseEnter={handleProfile}>
          <Box
            className={`header-notification-con ${
              notification ? "clicked" : ""
            }`}
            onClick={handleNotification}>
            <Badge
              badgeContent=""
              color="primary"
              overlap="circular"
              variant="dot"
              className="header-badge">
              <GoBell
                className={`header-notification ${
                  notification ? "clicked" : ""
                }`}
              />
            </Badge>
          </Box>

          <Box className="header-profile-contents">
            <Divider orientation="vertical" flexItem className="header-hr" />
            <Box className="header-profilepic-container">
              <img src={Profile} className="header-profilepic" alt="Profile" />
            </Box>
            <Box className="header-details">
              <Typography sx={{ fontSize: "13px", fontWeight: "550" }}>
                Bala Ganesh
              </Typography>
              <Typography sx={{ color: "#98A0AC", fontSize: "11px" }}>
                Super Admin
              </Typography>
            </Box>
            {showProfile ? <FaAngleUp /> : <FaAngleDown />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
