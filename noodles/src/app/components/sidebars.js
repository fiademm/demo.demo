import React, { useState } from "react";
import { PiBellSimpleRinging, PiBellSimpleRingingLight, PiBriefcase, PiCalendarDots, PiCalendarDotsLight, PiGearSix, PiGearSixLight, PiListChecks, PiListChecksLight, PiNotepad, PiNotepadLight, PiSignOut, PiSignOutLight, PiSquaresFour, PiUserGear, PiUserGearLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const activeScreen = location.pathname.split("/")[1];

  const handleLogout = () => {
    localStorage.removeItem("userId");
  };

  const buttonData = [
    {
      id: 1,
      icon: PiSquaresFour,
      title: "Dashboard",
      className: "sidebar-link-container",
      link: "/dashboard",
      onButtonClick: "",
      isActive: activeScreen === "dashboard",
    },
    {
      id: 2,
      icon: PiBriefcase,
      title: "Engagements",
      className: "sidebar-link-container",
      link: "/engagements",
      onButtonClick: "",
      isActive: activeScreen === "engagements",
    },
    {
      id: 3,
      icon: PiNotepad,
      title: "Reports",
      className: "sidebar-link-container",
      link: "/reports",
      onButtonClick: "",
      isActive: activeScreen === "reports",
    },
    {
      id: 4,
      icon: PiUserGear,
      title: "Resources",
      className: "sidebar-link-container",
      link: "/resources",
      onButtonClick: "",
      isActive: activeScreen === "resources",
    },
    {
      id: 5,
      icon: PiCalendarDots,
      title: "Schedule",
      className: "sidebar-link-container",
      link: "/schedule",
      onButtonClick: "",
      isActive: activeScreen === "schedule",
    },
    {
      id: 6,
      icon: PiListChecks,
      title: "Tasks",
      className: "sidebar-link-container",
      link: "/tasks",
      onButtonClick: "",
      isActive: activeScreen === "tasks",
    },
    {
      id: 7,
      icon: PiBellSimpleRinging,
      title: "Notifications",
      className: "sidebar-link-container",
      link: "/notifications",
      onButtonClick: "",
      isActive: activeScreen === "notifications",
    },
    {
      id: 8,
      icon: PiGearSix,
      title: "Settings",
      className: "sidebar-link-container",
      link: "/settings",
      onButtonClick: "",
      isActive: activeScreen === "settings",
    },
    {
      id: 9,
      icon: PiSignOut,
      title: "Logout",
      className: "sidebar-link-container",
      link: "/",
      onButtonClick: handleLogout,
    },
  ];

  return (
    <section className="main-sidebar-container">
      <div className="sidebar-expanded-logo">Noodles Insider</div>
      <hr className="sidebar-line-break" />
      {buttonData.map((button) => (
        <Link
          to={button.link}
          key={button.id}
          className={`sidebar-link-container ${
            button.isActive ? "active" : ""
          }`}
        >
          <span className="sidebar-link-component">
            <button.icon size={20} />
            {button.title}
          </span>
        </Link>
      ))}
    </section>
  );
};

const MiniSidebar = () => {
  const location = useLocation();
  const activeScreen = location.pathname.split("/")[1];

  const handleLogout = () => {
    localStorage.removeItem("userId");
  };

  const buttonData = [
    {
      id: 1,
      icon: PiSquaresFour,
      title: "Dashboard",
      className: "sidebar-link-container",
      link: "/dashboard",
      onButtonClick: "",
      isActive: activeScreen === "dashboard",
    },
    {
      id: 2,
      icon: PiBriefcase,
      title: "Engagements",
      className: "sidebar-link-container",
      link: "/engagements",
      onButtonClick: "",
      isActive: activeScreen === "engagements",
    },
    {
      id: 3,
      icon: PiNotepad,
      title: "Reports",
      className: "sidebar-link-container",
      link: "/reports",
      onButtonClick: "",
      isActive: activeScreen === "reports",
    },
    {
      id: 4,
      icon: PiUserGear,
      title: "Resources",
      className: "sidebar-link-container",
      link: "/resources",
      onButtonClick: "",
      isActive: activeScreen === "resources",
    },
    {
      id: 5,
      icon: PiCalendarDots,
      title: "Schedule",
      className: "sidebar-link-container",
      link: "/schedule",
      onButtonClick: "",
      isActive: activeScreen === "schedule",
    },
    {
      id: 6,
      icon: PiListChecks,
      title: "Tasks",
      className: "sidebar-link-container",
      link: "/tasks",
      onButtonClick: "",
      isActive: activeScreen === "tasks",
    },
    {
      id: 7,
      icon: PiBellSimpleRinging,
      title: "Notifications",
      className: "sidebar-link-container",
      link: "/notifications",
      onButtonClick: "",
      isActive: activeScreen === "notifications",
    },
    {
      id: 8,
      icon: PiGearSix,
      title: "Settings",
      className: "sidebar-link-container",
      link: "/settings",
      onButtonClick: "",
      isActive: activeScreen === "settings",
    },
    {
      id: 9,
      icon: PiSignOut,
      title: "Logout",
      className: "sidebar-link-container",
      link: "/",
      onButtonClick: handleLogout,
    },
  ];

  return (
    <section className="main-sidebar-container">
      <div className="sidebar-expanded-logo">NoodlIn</div>
      <hr className="sidebar-line-break" />
      {buttonData.map((button) => (
        <Link
          to={button.link}
          key={button.id}
          className={`sidebar-link-container ${
            button.isActive ? "active" : ""
          }`}
        >
          <span className="sidebar-link-component">
            <button.icon size={20} />
          </span>
        </Link>
      ))}
    </section>
  );
};

export { Sidebar, MiniSidebar };
