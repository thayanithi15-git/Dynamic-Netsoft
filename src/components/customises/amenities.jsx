import React, { useState } from "react";
import Amenities1 from "../../assets/Amenities1.jpg";
import Amenities2 from "../../assets/Amenities2.jpg";
import Amenities3 from "../../assets/Amenities3.jpg";
import Amenities4 from "../../assets/Amenities4.jpg";
import Amenities5 from "../../assets/Amenities5.jpg";
import Amenities6 from "../../assets/Amenities6.jpg";
import { Box, Divider, Switch } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { PiSwimmingPoolFill } from "react-icons/pi";

export default function Amenities({ onclose }) {
  const amenitiesData = [
    {
      id: 1,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities1,
    },
    {
      id: 2,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities2,
    },
    {
      id: 3,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities3,
    },
    {
      id: 4,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities4,
    },
    {
      id: 5,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities5,
    },
    {
      id: 6,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
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
                <Switch
                  checked={!!checkedAmenities[item.id]}
                  onChange={() => handleSwitchChange(item.id)}
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