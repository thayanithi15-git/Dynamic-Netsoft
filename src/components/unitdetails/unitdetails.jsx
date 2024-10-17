import { Box } from "@mui/material";
import React from "react";
import "../../styles/unitdetails.css";
import { BiBed } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
import House from "../../assets/House.jpg";

export default function Unitdetails() {
  const Estates = [
    {
      id: 1,
      house: House,
      name: "Jumeirah Estate",
      sale: 1200,
      subname: "Jumeirah Golf Estate",
      area: "2000",
      bed: 2,
      tub: 2,
      bhk: 2,
    },
    {
        id: 1,
        house: House,
        name: "Jumeirah Estate",
        sale: 1200,
        subname: "Jumeirah Golf Estate",
        area: "2000",
        bed: 2,
        tub: 2,
        bhk: 2,
      },
      {
        id: 1,
        house: House,
        name: "Jumeirah Estate",
        sale: 1200,
        subname: "Jumeirah Golf Estate",
        area: "2000",
        bed: 2,
        tub: 2,
        bhk: 2,
      },
      {
        id: 1,
        house: House,
        name: "Jumeirah Estate",
        sale: 1200,
        subname: "Jumeirah Golf Estate",
        area: "2000",
        bed: 2,
        tub: 2,
        bhk: 2,
      },
      {
        id: 1,
        house: House,
        name: "Jumeirah Estate",
        sale: 1200,
        subname: "Jumeirah Golf Estate",
        area: "2000",
        bed: 2,
        tub: 2,
        bhk: 2,
      },
  ];

  return (
    <Box className="units-container">
      <Box className="units-title">Unit Details</Box>
      <Box className="unit-all-estates">
        {Estates.map((estate) => (
          <Box key={estate.id} className="unit-estate">
            <Box className="unit-img-container">
              <img src={estate.house} className="unit-img"/>
              <HiOutlineTrash className="unit-trash"/>
            </Box>
            <Box className="unit-details">
              <Box className="unit-estatename">
                <Box>{estate.name}</Box>
                <Box>$ {estate.sale}</Box>
              </Box>
              <Box className="unit-estate-subdetails">
                <Box>{estate.subname}</Box>
                <Box className="leaddetail-dot"></Box>
                <Box>{estate.area} Sq.Ft</Box>
              </Box>
              <Box className="unit-estate-quantities">
                <BiBed />
                <Box>{estate.bed}</Box>
                <Box className="leaddetail-dot"></Box>
                <PiBathtubLight />
                <Box>{estate.tub}</Box>
                <Box className="leaddetail-dot"></Box>
                <GoHome />
                <Box>{estate.bhk}BHK</Box>
              </Box>
              <Box className="estate-customise">
                <FaPlus />
                <Box>Customise</Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
