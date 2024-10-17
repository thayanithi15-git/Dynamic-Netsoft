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

export default function Sidebar({onIconclick}) {
  const [clickedIcon, setClickedIcon] = useState(2);

  const Icons = [
    { id: 1, icon: <RiDashboardFill /> },
    { id: 2, icon: <RiTeamLine /> },
    { id: 3, icon: <ImUserTie /> },
    { id: 4, icon: <PiBuildings /> },
    { id: 5, icon: <HiTag /> },
    { id: 6, icon: <IoSettingsSharp /> },
    { id: 7, icon: <HiCloudArrowUp /> },
    { id: 8, icon: <PiNotepadFill /> },
    { id: 9, icon: <AiFillFolderOpen /> },
    { id: 10, icon: <AiFillMessage /> }
  ];

  const handleClick = (id) => {
    setClickedIcon(id);
    onIconclick(id);
  };

  useEffect(() => {
    onIconclick(clickedIcon);
  }, [clickedIcon, onIconclick]);

  return (
    <Box className="sidebar-contents">
      <Box className="sidebar-icon-container">
        <FaChevronRight className="sidebar-icons" />
      </Box>
      <Divider className="sidebar-hr" orientation="horizontal" flexItem />
      <Box className="sidebar-icon-container">
        {Icons.map((item) => (
          <Box
            key={item.id}
            className={`sidebar-subicons ${
              clickedIcon === item.id ? "clicked" : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            {item.icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
