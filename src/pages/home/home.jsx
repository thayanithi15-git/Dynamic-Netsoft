import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Box } from "@mui/material";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { TotalContext } from "../../components/usecontext/usecontext";
import { AuthBodyContent } from "./main";

export default function Home() {
  const { theme } = useContext(TotalContext);

  const [clickedIcon, setClickedIcon] = useState();
  const [sidebar, Setsidebar] = useState(false);

  const handleclickedIcon = (onIconclick) => {
    setClickedIcon(onIconclick);
    console.log("Icon clicked = ", onIconclick);
  };  

  const onSidebar = () => {
    Setsidebar(!sidebar);
  };

  return ( 
    <Box className="home-page" sx={{
      backgroundColor: (theme) => theme.palette.backcolor.main,
    }}>
      <Box className="home-header" sx={{
      backgroundColor: (theme) => theme.palette.header.main,
    }}>
        <Header />
      </Box>
      <Box
        className="home-body"
        >
        <Box
          className={`home-sidebar ${sidebar ? "open" : ""}`}
          sx={{ backgroundColor: (theme) => theme.palette.sidebar.main }}>
          <Sidebar onIconclick={handleclickedIcon} onSidebar={onSidebar} />
        </Box>
        {clickedIcon === 2 ? (
          <Box className={`home-main ${sidebar ? "open" : ""}`}>
            <AuthBodyContent />
          </Box>
        ) : clickedIcon === 1 ? (
          <Box>DashboardPage</Box>
        ): clickedIcon === 3 ? (
          <Box>DashboardPage</Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
