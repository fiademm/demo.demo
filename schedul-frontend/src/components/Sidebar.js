import React, { useState } from "react";
import {
  PiBellSimpleRingingLight,
  PiBriefcaseLight,
  PiCalendarDotsLight,
  PiGearSixLight,
  PiHouseLight,
  PiListChecksLight,
  PiNotepadLight,
  PiSignOutLight,
  PiSquareHalfLight,
  PiSquaresFourLight,
  PiUserGearLight,
} from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import withResponsiveLayout from "../utils/withResponsiveLayout";
import MiniLogo from "../assets/logosvg.svg";
import "../styles/sidebar.css";

const Sidebar = ({}) => {
  const [isSidebarMin, setIsSidebarMin] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMin(!isSidebarMin);
  };

  const location = useLocation();
  const activeScreen = location.pathname.split("/")[1];

  const handleLogout = () => {
    localStorage.removeItem("userId");
  };

  const sidebarButtonData = [
    {
      id: 1,
      icon: PiSquaresFourLight,
      title: "Dashboard",
      className: "sidebar-link-container",
      link: "/dashboard",
      onButtonClick: "",
      isActive: activeScreen === "dashboard",
    },
    {
      id: 2,
      icon: PiBriefcaseLight,
      title: "Engagements",
      className: "sidebar-link-container",
      link: "/engagements",
      onButtonClick: "",
      isActive: activeScreen === "engagements",
    },
    {
      id: 3,
      icon: PiNotepadLight,
      title: "Reports",
      className: "sidebar-link-container",
      link: "/reports",
      onButtonClick: "",
      isActive: activeScreen === "reports",
    },
    {
      id: 4,
      icon: PiUserGearLight,
      title: "Resources",
      className: "sidebar-link-container",
      link: "/resources",
      onButtonClick: "",
      isActive: activeScreen === "resources",
    },
    {
      id: 5,
      icon: PiCalendarDotsLight,
      title: "Schedule",
      className: "sidebar-link-container",
      link: "/schedule",
      onButtonClick: "",
      isActive: activeScreen === "schedule",
    },
    {
      id: 6,
      icon: PiListChecksLight,
      title: "Jobs",
      className: "sidebar-link-container",
      link: "/jobs",
      onButtonClick: "",
      isActive: activeScreen === "jobs",
    },
    {
      id: 7,
      icon: PiBellSimpleRingingLight,
      title: "Notifications",
      className: "sidebar-link-container",
      link: "/notifications",
      onButtonClick: "",
      isActive: activeScreen === "notifications",
    },
    {
      id: 8,
      icon: PiGearSixLight,
      title: "Settings",
      className: "sidebar-link-container",
      link: "/settings",
      onButtonClick: "",
      isActive: activeScreen === "settings",
    },
    {
      id: 9,
      icon: PiSignOutLight,
      title: "Logout",
      className: "sidebar-link-container",
      link: "/",
      onButtonClick: handleLogout,
    },
    {
      id: 10,
      icon: PiSquareHalfLight,
      title: "Toggle",
      className: "sidebar-link-container",
      link: "/",
      onButtonClick: toggleSidebar,
    },
  ];

  return (
    <section className={isSidebarMin ? "sidebar" : "sidebar mini"}>
      {isSidebarMin ? (
        <DefaultSidebar buttonData={sidebarButtonData} />
      ) : (
        <MiniSidebar buttonData={sidebarButtonData} />
      )}
    </section>
  );
};

const DefaultSidebar = ({ buttonData }) => {
  return (
    <>
      <div className="logo-container">
        <img src={MiniLogo} className="logo" alt="" />
      </div>
      <hr className="sidebar-divider" />
      {buttonData.map((button) => (
        <Link
          to={button.link}
          key={button.id}
          className={`sidebar-menu-container ${
            button.isActive ? "active" : ""
          }`}
          onClick={button.onButtonClick}
          >
          <span className="sidebar-menu">
            <button.icon className='sidebar-menu-icon' />
            {button.title}
          </span>
        </Link>
      ))}
    </>
  );
};

const MiniSidebar = ({ buttonData }) => {
    return (
        <>
    <div className="logo-container">
      <img src={MiniLogo} className="logo" alt="" />
    </div>
      <hr className="sidebar-divider" />
      {buttonData.map((button) => (
          <Link
          to={button.link}
          key={button.id}
          className={`sidebar-menu-container ${
              button.isActive ? "active" : ""
            }`}
            onClick={button.onButtonClick}
            >
          <span className="sidebar-menu mini">
            <button.icon className='sidebar-menu-icon' />
          </span>
        </Link>
      ))}
    </>
  );
};

export default withResponsiveLayout(Sidebar);
