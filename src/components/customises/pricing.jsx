import { Box, Button, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";
import FormControl from "@mui/material/FormControl";
import { FiInfo } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Primary from "../pricings/primary";
import Secondary from "../pricings/secondary";
import Refundables from "../pricings/refundables";
import Parkingslot from "../pricings/parkingslot";
import Onetimecharges from "../pricings/onetimecharges";
import Inventoryitem from "../pricings/inventoryitem";

export default function Pricing({ onclose }) {
  const [hoveredInfoId, setHoveredInfoId] = useState(null);
  const [pricingcards, setPricingCards] = useState(null);

  const pricingData = [
    { id: 1, name: "Primary", color: "#B3776D", bgColor: "#FEEAEA80" },
    { id: 2, name: "Secondary", color: "#896DB3", bgColor: "#EDE4FE80" },
    { id: 3, name: "One Time Charges", color: "#6DAFB3", bgColor: "#DBF0F180" },
    { id: 4, name: "Refundables", color: "#6D80B3", bgColor: "#E4EDFF80" },
    { id: 5, name: "Inventory Item", color: "#B3A16D", bgColor: "#FFFAD880" },
    { id: 6, name: "Parking Slot", color: "#B3776D", bgColor: "#FEEAEA80" },
  ];

  

  const handleMouseEnter = (id) => {
    setHoveredInfoId(id);
  };

  const handleMouseLeave = () => {
    setHoveredInfoId(null);
  };

  const handleClose = () => {
    onclose();
  };

  const handlePricingCard = (id) => {
    setPricingCards(pricingcards == id ? null : id);
  };

  return (
    <Box className="pricing-main">
      <Box
        className="pricing-header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}>
        <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>Pricing</Box>
        <RxCross1
          onClick={handleClose}
          className="cross-icon"
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Box className="pricing-body">
        {pricingData
          .filter((item) => pricingcards == null || item.id == pricingcards)
          .map((item) => (
            <Box
              key={item.id}
              className={`pricing-1 ${pricingcards ? "edit" : ""}`}
              sx={{
                backgroundColor: item.bgColor,
                marginBottom: "8px",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => handlePricingCard(item.id)}>
              <Box
                className="pricing-1-title"
                sx={{ display: "flex", alignItems: "center" }}>
                {pricingcards ? (
                  ""
                ) : (
                  <Box
                    className="pricing-1-value"
                    sx={{
                      backgroundColor: item.color,
                      color: "white",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}>
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </Box>
                )}
                <Box
                  className="pricing-1-name"
                  sx={{ color: item.color, fontWeight: "500" }}>
                  {item.name}
                </Box>
              </Box>
              <Box
                className="pricing-icons"
                sx={{ display: "flex", alignItems: "center" }}>
                <FiInfo
                  className="pricing-info"
                  style={{
                    cursor: "pointer",
                    marginRight: "8px",
                    color: hoveredInfoId === item.id ? "#656F7B" : "#CED3DD",
                  }}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                />
                {hoveredInfoId === item.id && (
                  <Box className="pricing-info-text">
                    Base rent or monthly rental amount. You can have only one
                    primary pricing component per property.
                  </Box>
                )}
                {pricingcards ? (
                  ""
                ) : (
                  <FaAngleRight
                    className="pricing-right"
                    style={{ color: item.color }}
                  />
                )}
              </Box>
            </Box>
          ))}
        {pricingcards == 1 ? (
          <Primary />
        ) : pricingcards == 2 ? (
          <Secondary />
        ) : pricingcards == 3 ? (
          <Onetimecharges />
        ) : pricingcards == 4 ? (
          <Refundables />
        ) : pricingcards == 5 ? (
          <Inventoryitem />
        ) : pricingcards == 6 ? (
          <Parkingslot />
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
