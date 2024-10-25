import React, { useContext } from "react";
import Bodyheader from "../../components/bodyheader/bodyheader";
import Bodyroutings from "../../components/bodyroutings/bodyroutings";
import Leaddetails from "../../components/leaddetails/leaddetails";
import Unitdetails from "../../components/unitdetails/unitdetails";
import Quotationdetails from "../../components/quotationdetails/quotationdetails";
import Bodyfooter from "../../components/bodyfooter/bodyfooter";
import { Box } from "@mui/material";
import Auth from "./auth";
import "../../styles/home.css";
import { TotalContext } from "../../components/usecontext/usecontext";

export const BodyContent = () => {

  
  const { theme } = useContext(TotalContext);

  return (
    <Box className="home-main-body">
      <Box className="home-main-header"  sx={{
      backgroundColor: (theme) => theme.palette.bodyheader.bgcolor,
    }}>
        <Bodyheader />
      </Box>
      <Box className="home-maincontents-container">
        <Box className="home-maincontents">
          <Box className="home-body-header" sx={{
            borderRadius: "8px 8px 0px 0px",
      backgroundColor: (theme) => theme.palette.bodyheader.bgcolor,
    }}>
            <Bodyroutings />
          </Box>
          <Box className="home-body-mainpages" sx={{
      backgroundColor: (theme) => theme.palette.bodyheader.bgcolor,
    }}>
            <Box className="home-body-leaddetails" >
              <Leaddetails />
            </Box>
            <Box className="home-body-unitdetails" sx={{
      backgroundColor: (theme) => theme.palette.bodyheader.unit,
    }}  >
              <Unitdetails />
            </Box>
            <Box className="home-body-quotationdetails">
              <Quotationdetails />
            </Box>
          </Box>
          <Box className="home-body-footer" sx={{
            borderRadius: "0px 0px 8px 8px",
      backgroundColor: (theme) => theme.palette.bodyheader.bgcolor,
    }}>
            <Bodyfooter />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const AuthBodyContent = Auth(BodyContent);
