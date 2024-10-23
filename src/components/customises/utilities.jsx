import { Box, Switch } from "@mui/material";
import React from "react";
import { RiSparkling2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Utility1 from "../../assets/Utility1.jpg";
import Utility2 from "../../assets/Utility2.jpg";
import Utility3 from "../../assets/Utility3.jpg";
import Utility4 from "../../assets/Utility4.jpg";
import Utility5 from "../../assets/Utility5.jpg";
import Utility6 from "../../assets/Utility6.jpg";

export default function Utilities({ onclose }) {
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
        // color: "#fff",
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

  const utilitiesData = [
    {
      id: 1,
      name: "Duplex",
      price: "$500.00",
      valid: "Valid Sep 2 - 12 Nov 23",
      img: Utility1,
    },
    {
      id: 2,
      name: "Cottage",
      price: "$520.00",
      valid: "Valid Feb 27 - 23 May 23",
      img: Utility2,
    },
    {
      id: 3,
      name: "Wolverine",
      price: "$220.00",
      valid: "Valid Nov 10 - 30 Dec 23",
      img: Utility3,
    },
    {
      id: 4,
      name: "Jumeirah",
      price: "$100.00",
      valid: "Valid Jan 18 - 25 Mar 23",
      img: Utility4,
    },
    {
      id: 5,
      name: "Bungalow",
      price: "$90.00",
      valid: "Valid Apr 1 - 21 Jun 23",
      img: Utility5,
    },
    {
      id: 6,
      name: "Form House",
      price: "$30.00",
      valid: "Valid Jun 30 - 1 Aug 23",
      img: Utility6,
    },
  ];

  const handleClose = () => {
    onclose();
  };

  return (
    <Box className="amenities-main">
      <Box className="amenities-header">
        <Box>Add Utility</Box>
        <RxCross1 onClick={handleClose} className="cross-icon" />
      </Box>
      <Box className="utility-subheader">
        <Box className="amenities-icon-value">
          <RiSparkling2Fill className="utility-icon" />
          <Box sx={{ display: "flex", gap: "0.4rem" }}>
            <Box>05</Box>
            <Box sx={{ fontWeight: "500" }}>Total Utility</Box>
          </Box>
        </Box>
        <Box>$ 200.00</Box>
      </Box>
      <Box className="amenities-body">
        <Box className="available-amenities">Available Utility</Box>
        {utilitiesData.map((item) => (
          <Box key={item.id} className="utilities-1">
            <Box className="amenities-img-details">
              <Box className="amenities-img-container">
                <img src={item.img} className="amenities-img" />
              </Box>
              <Box className="amenities-name-status">
                <Box>{item.name}</Box>
                <Box className="amenities-status">
                  <Box>{item.price}</Box>
                  <Box className="leaddetail-dot"></Box>
                  <Box>{item.valid}</Box>
                </Box>
              </Box>
            </Box>
            <Box className="amenities-switch">
              <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} />
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="amenities-update">Update & Save</Box>
    </Box>
  );
}
