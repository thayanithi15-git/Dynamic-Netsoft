import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../styles/sidebar.css";
import { FaChevronRight } from "react-icons/fa";
import { RiDashboardFill, RiTeamLine } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import { PiBuildings } from "react-icons/pi";
import { HiTag } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import { HiCloudArrowUp } from "react-icons/hi2";
import { PiNotepadFill } from "react-icons/pi";
import { AiFillFolderOpen, AiFillMessage } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa6";

export default function Sidebar({ onIconclick, onSidebar }) {
  const [clickedIcon, setClickedIcon] = useState(2);
  const [sidebar, Setsidebar] = useState(false);

  const Icons = [
    { id: 1, icon: <RiDashboardFill />, content: "Dashboard" },
    { id: 2, icon: <RiTeamLine />, content: "Companies" },
    { id: 3, icon: <ImUserTie />, content: "Owners" },
    { id: 4, icon: <PiBuildings />, content: "Properties" },
    { id: 5, icon: <HiTag />, content: "Pricing" },
    { id: 6, icon: <IoSettingsSharp />, content: "Setting" },
    { id: 7, icon: <HiCloudArrowUp />, content: "Data Management" },
    { id: 8, icon: <PiNotepadFill />, content: "Reports" },
    { id: 9, icon: <AiFillFolderOpen />, content: "Documents" },
    { id: 10, icon: <AiFillMessage />, content: "Communications" },
  ];

  const handleClick = (id) => {
    setClickedIcon(id);
    onIconclick(id);
  };

  useEffect(() => {
    onIconclick(clickedIcon);
  }, [clickedIcon, onIconclick]);

  const handleSidebarOpen = () => {
    onSidebar();
    Setsidebar(!sidebar);
  };

  return (
    <Box className={`sidebar-contents ${sidebar ? "open" : ""}`}>
      <Box
        className={`sidebar-icon-container ${sidebar ? "open" : ""}`}
        onClick={handleSidebarOpen}>
          <Box className={`sidebar-topactions ${sidebar ? "open" : ""}`}>
        {sidebar ? <Box>Property Manager For Start up</Box> : ""}
        {sidebar ? <FaChevronLeft className={`sidebar-icons ${sidebar ? "open" : ""}`} /> : <FaChevronRight className={`sidebar-icons ${sidebar ? "open" : ""}`} />}
        </Box>
      </Box>
      <Divider className={`sidebar-hr ${sidebar ? "open" : ""}`} orientation="horizontal" flexItem />
      <Box className="sidebar-icon-container">
        {Icons.map((item) => (
          <Box
            key={item.id}
            className={`sidebar-subicons ${
              clickedIcon === item.id ? "clicked" : sidebar ? "open" : ""
            }`}
            onClick={() => handleClick(item.id)}>
            <Box
              className={`sidebar-subicons-main ${
                clickedIcon === item.id && sidebar
                  ? "click-open"
                  : clickedIcon === item.id
                  ? "clicked"
                  : sidebar
                  ? "open"
                  : ""
              }`}>
              {item.icon}
            </Box>
            {sidebar ? <Box>{item.content}</Box> : ""}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
