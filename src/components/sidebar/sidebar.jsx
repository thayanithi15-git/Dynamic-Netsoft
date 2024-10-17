import { Box, Divider } from "@mui/material";
import React from "react";
import "../../styles/sidebar.css";
import { FaChevronRight } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import { PiBuildings } from "react-icons/pi";
import { HiTag } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import { HiCloudArrowUp } from "react-icons/hi2";
import { PiNotepadFill } from "react-icons/pi";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

export default function Sidebar() {

    const Icons = [
        {
            id: 1,
            icon: <RiDashboardFill />
        },
        {
            id: 2,
            icon: <RiTeamLine />
        },
        {
            id: 3,
            icon: <ImUserTie />
        },
        {
            id: 4,
            icon: <PiBuildings />
        },
        {
            id: 5,
            icon: <HiTag />
        },
        {
            id: 6,
            icon: <IoSettingsSharp />
        },
        {
            id: 7,
            icon: <HiCloudArrowUp />
        },
        {
            id: 8,
            icon: <PiNotepadFill />
        },
        {
            id: 9,
            icon: <AiFillFolderOpen />
        },
        {
            id: 10,
            icon: <AiFillMessage />
        },
    ]

  return (
    <Box className="sidebar-contents">
      <Box className="sidebar-icon-container">
        <FaChevronRight className="sidebar-icons" />
      </Box>
      <Divider className="sidebar-hr" orientation="horizontal" flexItem />
      <Box className="sidebar-icon-container">
        {Icons.map((icons) => (
        <Box key={icons.id} className="sidebar-icon-container">
          <Box className="sidebar-subicons">{icons.icon}</Box>
        </Box>
        ))}
      </Box>
    </Box>
  );
}
