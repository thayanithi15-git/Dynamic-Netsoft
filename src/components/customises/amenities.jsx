import React, { useState } from "react";
import Amenities1 from "../../assets/Amenities1.jpg";
import Amenities2 from "../../assets/Amenities2.jpg";
import Amenities3 from "../../assets/Amenities3.jpg";
import Amenities4 from "../../assets/Amenities4.jpg";
import Amenities5 from "../../assets/Amenities5.jpg";
import Amenities6 from "../../assets/Amenities6.jpg";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Divider, Switch } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { PiSwimmingPoolFill } from "react-icons/pi";

export default function Amenities({ onclose }) {
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
  const amenitiesData = [
    {
      id: 1,
      name: "Jumeirah",
      price: "$100.00",
      valid: "Valid Jan 18 - 25 Mar 23",
      img: Amenities1,
    },
    {
      id: 2,
      name: "Wolverine",
      price: "$220.00",
      valid: "Valid Nov 10 - 30 Dec 23",
      img: Amenities2,
    },
    {
      id: 3,
      name: "Duplex",
      price: "$500.00",
      valid: "Valid Sep 2 - 12 Nov 23",
      img: Amenities3,
    },
    {
      id: 4,
      name: "Form House",
      price: "$30.00",
      valid: "Valid Jun 30 - 1 Aug 23",
      img: Amenities4,
    },
    {
      id: 5,
      name: "Bungalow",
      price: "$90.00",
      valid: "Valid Apr 1 - 21 Jun 23",
      img: Amenities5,
    },
    {
      id: 6,
      name: "Cottage",
      price: "$520.00",
      valid: "Valid Feb 27 - 23 May 23",
      img: Amenities6,
    },
  ];

  const [checkedAmenities, setCheckedAmenities] = useState({});

  const handleSwitchChange = (id) => {
    setCheckedAmenities((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClose = () => {
    onclose();
  };

  return (
    <Box className="amenities-main">
      <Box className="amenities-header">
        <Box>Add Amenities</Box>
        <RxCross1 onClick={handleClose} className="cross-icon" />
      </Box>
      <Box className="amenities-subheader">
        <Box className="amenities-icon-value">
          <PiSwimmingPoolFill style={{ fontSize: "25px" }} />
          <Box sx={{ display: "flex", gap: "0.4rem" }}>
            <Box>05</Box>
            <Box sx={{ fontWeight: "500" }}>Total Amenities</Box>
          </Box>
        </Box>
        <Box>$ 200.00</Box>
      </Box>
      <Box className="amenities-body">
        <Box className="available-amenities">Available Amenities</Box>
        {amenitiesData.map((item) => (
          <Box key={item.id} className="amenities-main-container">
            <Box className="amenities-1">
              <Box className="amenities-img-details">
                <Box className="amenities-img-container">
                  <img
                    src={item.img}
                    className="amenities-img"
                    alt={item.name}
                  />
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
                {/* <Switch
                  checked={!!checkedAmenities[item.id]}
                  onChange={() => handleSwitchChange(item.id)}
                /> */}
                <FormControlLabel
                  control={
                    <IOSSwitch
                      sx={{ m: 1 }}
                      checked={!!checkedAmenities[item.id]}
                      onChange={() => handleSwitchChange(item.id)}
                    />
                  }
                />
              </Box>
            </Box>
            <Divider orientation="horizontal" className="amenities-free-hr" />
            {checkedAmenities[item.id] && (
              <Box className="amenities-checkbox">
                <label className="custom-checkbox">
                  <input type="checkbox" readOnly />
                  <span className="checkmark"></span>
                </label>
                <span>Free applicability</span>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box className="amenities-update">Update & Save</Box>
    </Box>
  );
}
