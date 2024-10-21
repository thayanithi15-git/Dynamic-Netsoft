import { Box, Switch } from '@mui/material'
import React from 'react'
import { RiSparkling2Fill } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import Utility1 from "../../assets/Utility1.jpg";
import Utility2 from "../../assets/Utility2.jpg";
import Utility3 from "../../assets/Utility3.jpg";
import Utility4 from "../../assets/Utility4.jpg";
import Utility5 from "../../assets/Utility5.jpg";
import Utility6 from "../../assets/Utility6.jpg";

export default function Utilities({onclose}) {

    const utilitiesData = [
        {
          id: 1,
          name: "Utility name",
          price: "$20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          img: Utility1,
        },
        {
          id: 2,
          name: "Utility name",
          price: "$20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          img: Utility2,
        },
        {
          id: 3,
          name: "Utility name",
          price: "$20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          img: Utility3,
        },
        {
          id: 4,
          name: "Utility name",
          price: "$20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          img: Utility4,
        },
        {
          id: 5,
          name: "Utility name",
          price: "$20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          img: Utility5,
        },
        {
          id: 6,
          name: "Utility name",
          price: "$20.00",
          valid: "Valid Feb 22 - 12 Feb 23",
          img: Utility6,
        },
      ];

    const handleClose = () => {
        onclose();
      }

  return (
    <Box className="amenities-main">
          <Box className="amenities-header">
            <Box>Add Utility</Box>
            <RxCross1
              onClick={handleClose}
              className="cross-icon"
            />
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
                  <Switch />
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="amenities-update">Update & Save</Box>
        </Box>
  )
}
