import React, { useState } from "react";
import {
  PiArrowSquareOutDuotone,
  PiBellSimpleRinging,
  PiBriefcase,
  PiCalendarDots,
  PiGearSix,
  PiGradient,
  PiListChecks,
  PiNotepad,
  PiSignOut,
  PiSquaresFour,
  PiUserGear,
} from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarMin, setIsSidebarMin] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMin(!isSidebarMin);
  };

  return (
    <section
      className={
        isSidebarMin ? "main-sidebar-container" : "main-sidebar-container-mini"
      }
    >
      {isSidebarMin ? <DefaultSidebar /> : <MiniSidebar />}
      {isSidebarMin ? (
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span className="sidebar-link-component">
            <PiArrowSquareOutDuotone size={20} />
            Toggle sidebar
          </span>
        </button>
      ) : (
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <PiArrowSquareOutDuotone size={20} />
        </button>
      )}
    </section>
  );
};

const DefaultSidebar = () => {
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
    <>
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
    </>
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
    <>
      <div className="sidebar-expanded-logo">
        <PiGradient size={30} />
      </div>
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
    </>
  );
};

export default Sidebar;
